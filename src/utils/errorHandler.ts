export function handleApiError(error: any): string {
    if (error.response) {
        return error.response.data.error || "Error en la solicitud";
    } else if (error.request) {
        return "No se recibió respuesta del servidor";
    } else {
        return "Error desconocido";
    }
}
