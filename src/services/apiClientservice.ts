import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://back-api-eta.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
    },
});
