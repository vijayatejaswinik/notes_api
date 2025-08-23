const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [];
let id = 1;

// Root route 
app.get("/", (req, res) => {
  res.send("Welcome to Notes API ");
});

// Create a note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  const note = { id: id++, title, content };
  notes.push(note);
  res.json({ message: "Note added", note });
});

// Get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Delete a note
app.delete("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  notes = notes.filter(n => n.id !== noteId);
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
