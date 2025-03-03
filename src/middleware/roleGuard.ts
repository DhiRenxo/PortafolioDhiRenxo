import { getAuthUser } from "../services/authservice";

export function roleGuard(requiredRole: string) {
    const user = getAuthUser();
    if (!user || user.role !== requiredRole) {
        return null; // ❌ No devolver `Response`, mejor `null`
    }
    return user;
}
