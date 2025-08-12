import fs from "fs";

const SPECIAL_TOKENS = {
  PAD: 0,
  UNK: 1,
  BOS: 2,
  EOS: 3,
};

function buildVocabFromText(text) {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .split(/\s+/);
  const vocab = { ...SPECIAL_TOKENS };
  let index = Object.keys(SPECIAL_TOKENS).length;

  for (const word of words) {
    if (!vocab[word]) {
      vocab[word] = index++;
    }
  }
  fs.writeFileSync("./src/vocab.json", JSON.stringify(vocab, null, 2));
  return vocab;
}

function encode(text, vocab) {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);
  return [vocab.BOS, ...words.map((w) => vocab[w] ?? vocab.UNK), vocab.EOS];
}

function decode(tokens, vocab) {
  const reverseVocab = Object.fromEntries(
    Object.entries(vocab).map(([k, v]) => [v, k])
  );
  return tokens
    .filter((t) => ![vocab.BOS, vocab.EOS, vocab.PAD].includes(t))
    .map((t) => reverseVocab[t] ?? "<UNK>")
    .join(" ");
}

export { buildVocabFromText, encode, decode, SPECIAL_TOKENS };
