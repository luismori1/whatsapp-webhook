import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/webhook", async (req, res) => {
  const { message, phone } = req.body;

  // Reenvía a tu n8n webhook (cámbialo por el tuyo)
  await fetch("https://n8n-production-d3b5.up.railway.app/webhook/gpt", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, phone }),
  });

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Servidor webhook activo en puerto ${PORT}`);
});
