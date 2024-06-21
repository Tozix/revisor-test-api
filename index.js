import express from "express";
import fs from "fs";

const app = express();

const config = JSON.parse(fs.readFileSync("config.json", "utf-8"));

app.use(express.json());

// Эндпоинты
app.get("/api/workers/get-configurations", (req, res) => {
  res.status(200).json(config);
});

const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
