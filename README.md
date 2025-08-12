# 🌟 Custom Tokenizer API

A simple **JavaScript/Node.js tokenizer** that learns vocabulary from text, supports **ENCODE**/**DECODE**, and handles **special tokens**.

Built as part of an assignment, this version is trained on the classic poem:

> _"Twinkle Twinkle Little Star"_ ✨

---

## 📂 Project Structure

```

tokenAssignment/
│
├── src/
│   ├── server.js       # Express server
│   ├── tokenizer.js    # Tokenizer logic (train, encode, decode)
│   └── vocab.json      # Learned vocabulary
│
├── package.json
├── README.md

```

---

## 🚀 Features

- 📖 **Learns vocab** from custom text
- 🔄 **Encode** words → token IDs
- 🔄 **Decode** token IDs → words
- 🛠 Handles **special tokens**:
  - `PAD` (0) → Padding
  - `UNK` (1) → Unknown word
  - `BOS` (2) → Beginning of sequence
  - `EOS` (3) → End of sequence

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/surendrasinghc80/tokenizer.git

# Go inside the folder
cd tokenAssignment

# Install dependencies
npm install
```

---

## ▶️ How to Run

**Development mode with auto-restart (nodemon):**

```bash
npm run dev
```

**Normal mode:**

```bash
node src/server.js
```

Once started, your API will be available at:

```
http://localhost:3000
```

---

## 🌐 API Endpoints

### **1️⃣ Train Tokenizer**

**POST** `/train`
Builds vocabulary from a given text.

**Request Body:**

```json
{
  "text": "Twinkle twinkle little star how I wonder what you are up above the world so high like a diamond in the sky"
}
```

**Response:**

```json
{
  "message": "Vocab built",
  "vocab": {
    "PAD": 0,
    "UNK": 1,
    "BOS": 2,
    "EOS": 3,
    "twinkle": 4,
    "little": 5,
    "star": 6,
    "...": "..."
  }
}
```

---

### **2️⃣ Encode Text**

**POST** `/encode`
Converts text into a sequence of token IDs.

**Request Body:**

```json
{
  "text": "twinkle little star"
}
```

**Response:**

```json
{
  "tokens": [2, 4, 5, 6, 3]
}
```

_(2 = BOS, 3 = EOS)_

---

### **3️⃣ Decode Tokens**

**POST** `/decode`
Converts token IDs back into text.

**Request Body:**

```json
{
  "tokens": [2, 4, 5, 6, 3]
}
```

**Response:**

```json
{
  "decoded": "twinkle little star"
}
```

---

## 📜 Example Vocabulary

**`vocab.json`**

```json
{
  "PAD": 0,
  "UNK": 1,
  "BOS": 2,
  "EOS": 3,
  "twinkle": 4,
  "little": 5,
  "star": 6,
  "how": 7,
  "i": 8,
  "wonder": 9,
  "what": 10,
  "you": 11,
  "are": 12,
  "up": 13,
  "above": 14,
  "the": 15,
  "world": 16,
  "so": 17,
  "high": 18,
  "like": 19,
  "a": 20,
  "diamond": 21,
  "in": 22,
  "sky": 23
}
```

---

## 🧠 Understanding Special Tokens

| Token | ID  | Purpose                            |
| ----- | --- | ---------------------------------- |
| PAD   | 0   | Padding for fixed-length sequences |
| UNK   | 1   | Word not found in vocabulary       |
| BOS   | 2   | Start of sequence                  |
| EOS   | 3   | End of sequence                    |

---

## 📷 Screenshots

-> Train // Adding the vocab in the vocab.json
<img width="1975" height="1291" alt="image" src="https://github.com/user-attachments/assets/601e091b-a180-4ef8-a1ae-841c25b9bbb6" />

-> Encode // Testing the encoding
<img width="1975" height="1291" alt="image" src="https://github.com/user-attachments/assets/08c6c493-ed1c-4266-a4b8-a188568e89c6" />

-> Decoding // Sending the token to get the data
<img width="1975" height="1291" alt="image" src="https://github.com/user-attachments/assets/206d53ba-8d49-45d9-b949-027b1b4c1301" />



---

## 🏆 Evaluation Criteria

- ✅ Correct ENCODE/DECODE
- ✅ Vocab quality
- ✅ Performance
- ✅ Code quality
- ✅ Documentation

---

## 📄 License

MIT License © 2025

```

---

If you want, I can also **write the exact Postman example collection JSON** so you can directly import it and test `/train`, `/encode`, `/decode` instantly.
Do you want me to prepare that next?
```


