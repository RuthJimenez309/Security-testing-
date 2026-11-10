import express = require("express");
import mysql = require("mysql2/promise");
import dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// Corregido: Mapeo exacto a las variables de tu archivo .env
const poolConfig: mysql.PoolOptions = {
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  port: parseInt(process.env.DB_PORT || "3307"),
  password: process.env.MYSQL_ROOT_PASSWORD || "rootpassword",
  database: process.env.MYSQL_DATABASE || "security_lab"
};

const pool = mysql.createPool(poolConfig);

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // DEFENSIVO: Consultas preparadas usando placeholders (?) para mitigar SQLi
    const query = "SELECT id, username, secret_flag FROM users WHERE username = ? AND password = ?";
    const [rows] = await pool.execute(query, [username, password]);

    if ((rows as any).length > 0) {
      res.json({ success: true, user: (rows as any)[0] });
    } else {
      res.status(401).json({ success: false, message: "Credenciales invalidas" });
    }
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor protegido corriendo en puerto ${PORT}`);
});
