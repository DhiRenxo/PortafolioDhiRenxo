import type { BlogPost } from "../types/blogtypes";
import { apiClient } from "./apiClientservice";

// Obtener todos los posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
    const response = await apiClient.get("/blog");
    return response.data;
};

// Obtener un post por ID
export const getBlogPostById = async (id: string): Promise<BlogPost> => {
    const response = await apiClient.get(`/blog/${id}`);
    return response.data;
};

// Crear un nuevo post
export const createBlogPost = async (post: Omit<BlogPost, "id" | "created_at">): Promise<BlogPost> => {
    const response = await apiClient.post("/blog", post);
    return response.data;
};

// Actualizar un post existente
export const updateBlogPost = async (id: string, post: Partial<BlogPost>): Promise<BlogPost> => {
    const response = await apiClient.put(`/blog/${id}`, post);
    return response.data;
};

// Eliminar un post
export const deleteBlogPost = async (id: string): Promise<void> => {
    await apiClient.delete(`/blog/${id}`);
};