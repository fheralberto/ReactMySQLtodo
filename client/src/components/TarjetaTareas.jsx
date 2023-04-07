import { useTareas } from "../context/TareaContext";
import { useNavigate } from "react-router-dom";

function TarjetaTareas({ tarea }) {
  const { eliminaTarea, cambiaEstadoHecho } = useTareas();
  const navigate = useNavigate();

  const cambiarHecho = async () => {
    console.log(tarea.id);
    await cambiaEstadoHecho(tarea.id);
  };

  return (
    <div className="bg-slate-800 rounded-md p-4 flex justify-between flex-col">
      <div>
        <header className="flex justify-between">
          <h2 className="text-xl font-bold">{tarea.titulo}</h2>
          <span
            className="hover:bg-slate-700 cursor-pointer px-1"
            onClick={() => cambiarHecho()}
          >
            {tarea.hecho ? "✔️" : "❌"}
          </span>
        </header>
        <p className="text-lg font-bold">{tarea.descripcion}</p>
        <span className="text-xs">{tarea.createAt}</span>
      </div>
      <div className="flex justify-center flex-wrap gap-2 mt-4">
        <button
          className="bg-red-600 px-2 hover:bg-red-500"
          onClick={() => eliminaTarea(tarea.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-600 px-2 py-3 hover:bg-slate-500"
          onClick={() => navigate(`/editar/${tarea.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TarjetaTareas;
