import { Token } from "@/providers/AuthProvider";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

if (typeof window !== "undefined") {
  axios.interceptors.request.use(async (config) => {
    const storedToken = localStorage.getItem("token");
    const tokenObj: Token | null = storedToken ? JSON.parse(storedToken) : null;

    if (tokenObj?.token) {
      config.headers.Authorization = "Bearer " + tokenObj.token;
    }

    return config;
  });
}

axios.interceptors.response.use(
  (response) => {
    if (response.config.responseType === "blob") {
      const contentType = response.headers["content-type"];
      if (
        contentType === "application/pdf" ||
        contentType === "application/octet-stream"
      ) {
        return response;
      }
      return response.data.text().then((text: string) => {
        try {
          const errorData = JSON.parse(text);
          throw new Error(errorData.message || "Erreur serveur");
        } catch (e: any) {
          throw new Error("Erreur serveur", e);
        }
      });
    }
    if (response?.data) return response.data;
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const storedToken = localStorage.getItem("token");
        const tokenObj: Token | null = storedToken
          ? JSON.parse(storedToken)
          : null;

        const { data } = await Axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refreshToken`,
          {
            headers: {
              Authorization: "Bearer " + tokenObj?.token,
            },
          }
        );

        const newTokenObj: Token = data.data.token;
        localStorage.setItem("token", JSON.stringify(newTokenObj));
        originalRequest.headers.Authorization = "Bearer " + newTokenObj.token;

        return axios(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
