import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/index.js";
import { connectDB } from "./database.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Servidor corriendo con éxito!");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
