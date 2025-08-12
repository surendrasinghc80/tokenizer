import express from "express";
import fs from "fs";
import { buildVocabFromText, encode, decode } from "./tokenizer.js";

const app = express();
app.use(express.json());

// Train vocab
app.post("/train", (req, res) => {
  const { text } = req.body;
  const vocab = buildVocabFromText(text);
  res.json({ message: "Vocab built", vocab });
});

// Encode text
app.post("/encode", (req, res) => {
  const { text } = req.body;
  const vocab = JSON.parse(fs.readFileSync("./src/vocab.json"));
  const tokens = encode(text, vocab);
  res.json({ tokens });
});

// Decode tokens
app.post("/decode", (req, res) => {
  const { tokens } = req.body;
  const vocab = JSON.parse(fs.readFileSync("./src/vocab.json"));
  const decoded = decode(tokens, vocab);
  res.json({ decoded });
});

app.listen(3000, () =>
  console.log("Tokenizer API running on http://localhost:3000")
);
