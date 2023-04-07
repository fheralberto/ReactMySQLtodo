import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between py-0 px-4">
      <Link to="/" className="flex flex-col justify-center">
        <h1 className="font-bold">React MySQL</h1>
      </Link>
      <ul className="flex">
        <li>
          <Link to="/" className="px-4 block h-full py-2 hover:bg-zinc-600">
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/nueva"
            className="px-4 block h-full py-2 hover:bg-zinc-600"
          >
            Crear tarea
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
