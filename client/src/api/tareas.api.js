import axios from "axios";

export const createTaskRequest = async (tarea) =>
  await axios.post("http://localhost:4000/tareas", tarea);

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/tareas");

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/tareas/${id}`);

export const updateTaskRequest = async (id, nuevaTarea) =>
  await axios.put(`http://localhost:4000/tareas/${id}`, nuevaTarea);

export const toggleDoneRequest = async (id, hecho) => {
  await axios.put(`http://localhost:4000/tareas/${id}`, { hecho });
};

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tareas/${id}`);
