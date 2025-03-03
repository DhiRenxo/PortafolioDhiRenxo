import { getUserById, updateUser, changePassword } from "../services/userservice";

export async function initializeAdmin(user) {
    if (!user || !("id" in user) || typeof user.id !== "string") {
        throw new Error("Acceso denegado");
    }

    const userData = await getUserById(user.id);

    return {
        name: userData?.name || "",
        email: userData?.email || "",
        oldPassword: "",
        newPassword: "",
        successMessage: "",
        errorMessage: "",
    };
}

export async function handleUpdate(event, userId, state) {
    event.preventDefault();
    if (!userId) {
        state.errorMessage = "Usuario no autenticado.";
        return;
    }

    try {
        const updatedData = { name: state.name, email: state.email };
        await updateUser(userId, updatedData);
        state.successMessage = "Datos actualizados correctamente";
        state.errorMessage = "";
    } catch (error) {
        state.errorMessage = "Error al actualizar los datos.";
    }
}

export async function handleChangePassword(event, userId, state) {
    event.preventDefault();
    if (!userId) {
        state.errorMessage = "Usuario no autenticado.";
        return;
    }

    if (!state.oldPassword || !state.newPassword) {
        state.errorMessage = "Debes llenar ambos campos para cambiar la contraseña.";
        return;
    }

    try {
        await changePassword(userId, state.oldPassword, state.newPassword);
        state.successMessage = "Contraseña actualizada correctamente.";
        state.errorMessage = "";
        state.oldPassword = "";
        state.newPassword = "";
    } catch (error) {
        state.errorMessage = "Error al actualizar la contraseña.";
    }
}
