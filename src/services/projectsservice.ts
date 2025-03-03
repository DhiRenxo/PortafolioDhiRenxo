import type { Project } from "../types/projecttypes";
import { apiClient } from "./apiClientservice";

// Obtener todos los proyectos
export const getProjects = async (): Promise<Project[]> => {
    const response = await apiClient.get("/projects");
    return response.data;
};

// Obtener un proyecto por ID
export const getProjectById = async (id: string): Promise<Project> => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
};

// Crear un nuevo proyecto
export const createProject = async (projectData: Omit<Project, "id" | "created_at">): Promise<Project> => {
    const response = await apiClient.post("/projects", projectData);
    return response.data;
};

// Actualizar un proyecto por ID
export const updateProject = async (id: string, projectData: Partial<Omit<Project, "id" | "created_at">>): Promise<Project> => {
    const response = await apiClient.put(`/projects/${id}`, projectData);
    return response.data;
};

// Eliminar un proyecto por ID
export const deleteProject = async (id: string): Promise<void> => {
    await apiClient.delete(`/projects/${id}`);
};
