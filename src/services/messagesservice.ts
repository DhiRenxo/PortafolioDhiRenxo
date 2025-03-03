import type { Message } from "../types/messagetypes";
import { apiClient } from "./apiClientservice";

// Obtener todos los mensajes
export const getMessages = async (): Promise<Message[]> => {
    const response = await apiClient.get("/messages");
    return response.data;
};

// Obtener un mensaje por ID
export const getMessageById = async (id: string): Promise<Message> => {
    const response = await apiClient.get(`/messages/${id}`);
    return response.data;
};

// Enviar un nuevo mensaje
export const sendMessage = async (messageData: Omit<Message, "id" | "created_at">): Promise<Message> => {
    const response = await apiClient.post("/messages", messageData);
    return response.data;
};

// Eliminar un mensaje por ID
export const deleteMessage = async (id: string): Promise<void> => {
    await apiClient.delete(`/messages/${id}`);
};
