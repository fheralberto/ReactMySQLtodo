import { Form, Formik } from "formik";
import { useTareas } from "../context/TareaContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function FormularioTareas() {
  const { creaTarea, obtieneTarea, actualizaTarea } = useTareas();
  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargaTarea = async () => {
      if (params.id) {
        const tarea = await obtieneTarea(params.id);
        setTarea({
          titulo: tarea.titulo,
          descripcion: tarea.descripcion,
        });
      }
    };
    cargaTarea();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">
        {params.id ? `Editar tarea ${params.id}` : "Nueva tarea"}
      </h1>
      <Formik
        initialValues={tarea}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          // console.log(values);

          if (params.id) {
            await actualizaTarea(params.id, values);
          } else {
            await creaTarea(values);
            actions.resetForm();
          }
          setTarea({
            titulo: "",
            descripcion: "",
          });
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-800 max-w-sm m-auto p-4 rounded-md"
          >
            <label className="block py-2">Título</label>
            <input
              type="text"
              name="titulo"
              placeholder="Escribe un título"
              className="text-black pl-2 pb-2 py-1 rounded-sm w-full mb-3"
              onChange={handleChange}
              value={values.titulo}
            />

            <label className="block  py-2">Descripción</label>
            <textarea
              name="descripcion"
              rows="3"
              placeholder="Escribe la descripción"
              className="text-black pl-2 pb-2 py-1 rounded-sm w-full mb-3"
              onChange={handleChange}
              value={values.descripcion}
            ></textarea>
            <button type="submit" disabled={isSubmitting} className="block bg-indigo-900 py-2 w-full rounded-sm">
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormularioTareas;
