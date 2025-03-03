import { apiClient } from "./apiClientservice";
import { getToken } from "./authservice"; // Usamos getToken() para obtener el token de autenticación
import type { Users } from "../types/usertypes";

// Función para obtener los headers de autorización
function authHeaders() {
    const token = getToken();
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
}

// Obtener todos los usuarios (solo admin)
export async function getUsers(): Promise<Users[]> {
    const response = await apiClient.get<Users[]>("/users", authHeaders());
    return response.data;
}

// Obtener un usuario por ID (requiere autenticación)
export async function getUserById(id: string): Promise<Users> {
    const response = await apiClient.get<Users>(`/users/${id}`, authHeaders());
    return response.data;
}

// Actualizar datos del usuario autenticado (nombre, correo, etc.)
export async function updateUser(id: string, userData: Partial<Users>): Promise<Users> {
    const response = await apiClient.put<Users>(`/users/${id}`, userData, authHeaders());
    return response.data;
}

// Cambiar contraseña del usuario autenticado
export async function changePassword(id: string, oldPassword: string, newPassword: string): Promise<{ message: string }> {
    const response = await apiClient.put<{ message: string }>(
        `/users/${id}/change-password`,
        { oldPassword, newPassword },
        authHeaders()
    );
    return response.data;
}

// Eliminar cuenta del usuario autenticado
export async function deleteUser(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`, authHeaders());
}
