import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleDoneRequest,
  deleteTaskRequest,
} from "../api/tareas.api";

export const TareaContext = createContext();

export const useTareas = () => {
  const context = useContext(TareaContext);
  if (!context) {
    throw new Error(
      "useTareas debe usarse dentro de un TareasContextoProvider"
    );
  }
  return context;
};

export const TareaContextProvider = ({ children }) => {
  const [tareas, setTareas] = useState([]);

  const creaTarea = async (tarea) => {
    try {
      const response = await createTaskRequest(tarea);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const cargarTareas = async () => {
    const response = await getTasksRequest();
    setTareas(response.data);
    // console.log(response.data);
  };

  const obtieneTarea = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const actualizaTarea = async (id, nuevaTarea) => {
    try {
      const response = await updateTaskRequest(id, nuevaTarea);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const cambiaEstadoHecho = async (id) => {
    try {
      const tareaEncontrada = tareas.find((tarea) => tarea.id === id);
      await toggleDoneRequest(id, tareaEncontrada.hecho ? 0 : 1);
      //_____________________________________________________________
      setTareas(
        tareas.map((tarea) =>
          tarea.id === id ? {...tarea, hecho: !tarea.hecho} : tarea
        )
      );
      //_____________________________________________________________
    } catch (error) {
      console.error(error);
    }
  };

  const eliminaTarea = async (id) => {
    try {
      console.log(await deleteTaskRequest(id));
      setTareas(tareas.filter((tarea) => tarea.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TareaContext.Provider
      value={{
        tareas,
        cargarTareas,
        obtieneTarea,
        creaTarea,
        actualizaTarea,
        cambiaEstadoHecho,
        eliminaTarea,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};
