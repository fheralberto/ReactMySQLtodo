import express from "express";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import rutasTareas from "./routes/tareas.routes.js";

const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url));
// console.log(_dirname)

// app.use(cors({
//   origin: 'http://localhost:5173'
// }));
app.use(cors()); // Que se conecten todos
app.use(express.json());

app.use(indexRoutes);
app.use(rutasTareas);

app.use(express.static(join(_dirname, "../client/dist")));

app.listen(PORT);
console.log(`Servidor corriendo en el puerto ${PORT}`);

// MERN Stack con MySQL
// https://youtu.be/dJbd7BYofp4
// Frontend inicia en 1:00:18
// Obtener todas las tareas inicia en 1:27:25
