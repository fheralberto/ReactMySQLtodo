import { Routes, Route } from "react-router-dom";
import PaginaTareas from "./pages/PaginaTareas";
import FormularioTareas from "./pages/FormularioTareas";
import NoEncontrado from "./pages/NoEncontrado";
import Navbar from "./components/Navbar";
import { TareaContextProvider } from "./context/TareaContext";

function App() {
  return (
    <div className="text-white bg-slate-600 max-w-3xl mx-auto pb-1">
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <TareaContextProvider>
          <Routes>
            <Route path="/" element={<PaginaTareas />} />
            <Route path="/nueva" element={<FormularioTareas />} />
            <Route path="/editar/:id" element={<FormularioTareas />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </TareaContextProvider>
      </div>
    </div>
  );
}

export default App;
