interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}

export function validateLoginForm(email: string, password: string): ValidationResult {
    const errors: Record<string, string> = {};

    if (!email.trim()) {
        errors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Formato de correo inválido";
    }

    if (!password.trim()) {
        errors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    return { isValid: Object.keys(errors).length === 0, errors };
}

export function validateCommentForm(name: string, content: string): ValidationResult {
    const errors: Record<string, string> = {};

    if (!name.trim()) {
        errors.name = "El nombre es obligatorio";
    }

    if (!content.trim()) {
        errors.content = "El comentario no puede estar vacío";
    } else if (content.length > 500) {
        errors.content = "El comentario no puede superar los 500 caracteres";
    }

    return { isValid: Object.keys(errors).length === 0, errors };
}
