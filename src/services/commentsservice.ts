import type { Comment } from "../types/commenttypes";
import { apiClient } from "./apiClientservice";

// Obtener todos los posts
export const getAllComments = async (): Promise<Comment[]> => {
    const response = await apiClient.get("/comments");
    return response.data;
};

// Obtener un post por ID
export const getCommentById = async (id: string): Promise<Comment> => {
    const response = await apiClient.get(`/comments/${id}`);
    return response.data;
};

// Crear un nuevo post
export const createComment = async (post: Omit<Comment, "id" | "created_at">): Promise<Comment> => {
    const response = await apiClient.post("/comments", post);
    return response.data;
};

// Eliminar un post
export const deleteComment = async (id: string): Promise<void> => {
    await apiClient.delete(`/comments/${id}`);
};