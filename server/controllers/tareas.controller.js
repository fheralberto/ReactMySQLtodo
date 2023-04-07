import { pool } from "../db.js";

export const obtenerTareas = async (req, res) => {
  try {
    // throw new Error("Error de conexión");
    const [result] = await pool.query(
      "SELECT * FROM tareas ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ Mensaje: error.message });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tareas WHERE id = ? LIMIT 1",
      [req.params.id]
    );
    if (result.length === 0)
      return res.status(404).json({ Mensaje: "Tarea no encontrada" });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ Mensaje: error.message });
  }
};

export const crearTarea = async (req, res) => {
  const { titulo, descripcion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tareas ( titulo, descripcion ) VALUES (?,?)",
      [titulo, descripcion]
    );
    res.send({
      id: result[0].insertId,
      titulo,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ Mensaje: error.message });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE tareas SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ Mensaje: "Tarea no encontrada" });
    res.json({ id: req.params.id, actualizados: req.body });
  } catch (error) {
    return res.status(500).json({ Mensaje: error.message });
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE from tareas WHERE id= ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ Mensaje: "Tarea no encontrada" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ Mensaje: error.message });
  }
};
