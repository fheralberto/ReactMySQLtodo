import { useEffect } from "react";
import TarjetaTareas from "../components/TarjetaTareas";
import { useTareas } from "../context/TareaContext";

function PaginaTareas() {
  const { tareas, cargarTareas } = useTareas();

  useEffect(() => {
    cargarTareas();
  }, []);

  function muestraTareas() {
    if (tareas.length === 0) return <h2>No hay tareas aún</h2>;
    return tareas.map((tarea) => (
      <TarjetaTareas tarea={tarea} key={tarea.id} />
    ));
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">Tareas</h2>
      <div className="grid grid-cols-3 gap-2">{muestraTareas()}</div>
    </div>
  );
}

export default PaginaTareas;
