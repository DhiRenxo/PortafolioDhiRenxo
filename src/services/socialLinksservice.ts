import type { SocialLink } from "../types/socialLinktypes";
import { apiClient } from "./apiClientservice";

// Obtener todos los enlaces de redes sociales
export const getSocialLinks = async (): Promise<SocialLink[]> => {
    const response = await apiClient.get("/social-links");
    return response.data;
};

// Obtener un enlace por ID
export const getSocialLinkById = async (id: string): Promise<SocialLink> => {
    const response = await apiClient.get(`/social-links/${id}`);
    return response.data;
};

// Crear un nuevo enlace de red social
export const createSocialLink = async (socialLinkData: Omit<SocialLink, "id" | "created_at">): Promise<SocialLink> => {
    const response = await apiClient.post("/social-links", socialLinkData);
    return response.data;
};

// Actualizar un enlace de red social por ID
export const updateSocialLink = async (id: string, socialLinkData: Partial<Omit<SocialLink, "id" | "created_at">>): Promise<SocialLink> => {
    const response = await apiClient.put(`/social-links/${id}`, socialLinkData);
    return response.data;
};

// Eliminar un enlace de red social por ID
export const deleteSocialLink = async (id: string): Promise<void> => {
    await apiClient.delete(`/social-links/${id}`);
};
