const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const { generatePairCode, startSession } = require("./index");

app.post("/api/pair", async (req, res) => {
  const { number } = req.body;
  if (!number) return res.status(400).json({ ok: false, error: "Missing number" });
  try {
    const code = await generatePairCode(number);
    res.json({ ok: true, code });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.post("/api/connect", async (req, res) => {
  const { number, code } = req.body;
  if (!number || !code) return res.status(400).json({ ok: false, error: "Missing number or code" });
  try {
    const result = await startSession(number, code);
    res.json({ ok: true, result });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
