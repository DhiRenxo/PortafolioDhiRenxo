export function saveAuthData(token: string, user: { id: string; name: string; email: string; role: string }) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
}

export function getAuthToken(): string | null {
    return localStorage.getItem("token");
}

export function getAuthUser(): { id: string; name: string; email: string; role: string } | null {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

export function isAuthenticated(): boolean {
    return !!getAuthToken();
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
}
