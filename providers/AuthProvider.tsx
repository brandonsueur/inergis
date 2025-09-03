"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { UserDTO } from "@/dto/user";
import axios from "axios";
import { getUserByUuid } from "@/requests/users";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { UUID } from "node:crypto";

export type Token = {
  type: string;
  name: string;
  token: string;
  expiresAt: string;
  lastUsedAt: string;
};

interface AuthResponse {
  token: Token;
  user: UserDTO;
}

type AuthContextType = {
  token: Token | null;
  user: UserDTO | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setRefreshUser: (refresh: boolean) => void;
  signIn: (credentials: {
    email: string;
    password: string;
  }) => Promise<AuthResponse>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDTO | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshUser, setRefreshUser] = useState(false);
  const router = useRouter();

  console.log(user);
  const { data: userData, refetch } = useQuery({
    queryKey: ["user", user?.uuid],
    queryFn: () => getUserByUuid(user?.uuid as UUID),
    enabled: !!user?.uuid && refreshUser,
  });

  useEffect(() => {
    if (refreshUser) {
      refetch();
    }
    if (!userData?.data) return;

    setUser(userData.data);
    localStorage.setItem("user", JSON.stringify(userData.data));

    setRefreshUser(false);
  }, [userData, setRefreshUser, refetch, refreshUser]);

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token") || "null");
    const storedUser = JSON.parse(
      localStorage.getItem("user") || "null",
    ) as UserDTO | null;

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }

    const hydrateUser = async () => {
      console.log("hydrateUser");
      if (storedUser?.uuid && storedToken?.token) {
        console.log("hydrateUser with token");
        try {
          const response = await getUserByUuid(storedUser.uuid);
          setUser(response.data);
        } catch (error) {
          console.warn("Erreur lors de la récupération du user :", error);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setToken(null);
          setUser(null);
        }
      } else if (storedUser) {
        setUser(storedUser);
      }
      setIsLoading(false);
    };

    hydrateUser();
  }, [router]);

  const signIn = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);

    try {
      const response = await axios.post<{ data: AuthResponse }>(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        credentials,
      );

      const { token, user } = response.data.data;

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));

      setToken(token);
      setUser(user);

      router.push("/");
      toast.success("Vous êtes connecté avec succès !");

      return response.data.data;
    } catch (error: any) {
      console.error(error);

      const message =
        error.response?.data?.message ||
        error.message ||
        "Une erreur est survenue lors de la connexion.";

      toast.error(message, {
        position: "bottom-center",
      });

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);

    try {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`);
    } catch (error) {
      console.warn("Erreur lors du logout", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setToken(null);
      setUser(null);

      toast.success("Vous êtes déconnecté avec succès !");

      router.push("/login");
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signOut,
        token,
        setRefreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
