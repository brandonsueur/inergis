import { Credentials } from "@/dto/auth";
import { axios } from "@/utils";

export const login = (credentials: Credentials) =>
  axios.post("/auth/login", credentials);

export const refreshToken = () => axios.get("/auth/refreshToken");

export const logout = () => axios.get("/auth/logout");
