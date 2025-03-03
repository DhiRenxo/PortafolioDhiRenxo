import { apiClient } from "./apiClientservice";

interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface AuthResponse {
    token: string;
    user: AuthUser;
}

// Iniciar sesión y obtener el token
export async function login(email: string, password: string): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>("/users/login", { email, password });
    return response.data;
}

// Cerrar sesión
export function logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

// Guardar token y usuario en el almacenamiento local
export function setAuthData(token: string, user: AuthUser): void {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
}

// Obtener el token
export function getToken(): string | null {
    return localStorage.getItem("token");
}
// Obtener los datos del usuario autenticado con manejo de errores
export function getAuthUser(): AuthUser | null {
    try {
        // Verificar si estamos en el navegador antes de acceder a localStorage
        if (typeof window === "undefined") return null;

        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error("Error al parsear los datos del usuario:", error);
        return null;
    }
}


// Verificar si el usuario está autenticado
export function isAuthenticated(): boolean {
    return !!getToken();
}
