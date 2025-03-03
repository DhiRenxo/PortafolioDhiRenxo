import { getToken } from "../services/authservice";

export function authGuard() {
    const token = getToken();
    if (!token) {
        return new Response(null, { status: 302, headers: { Location: "/login" } });
    }
}
