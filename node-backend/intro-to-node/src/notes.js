import { insertDB, saveDB, getDb } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note,
  };
  await insertDB(note);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDb();
  return notes;
};

export const findNote = async (filter) => {
  const { notes } = await getAllNotes();

  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const { notes } = await getAllNotes();
  const match = notes.find((note) => note.id === id);
  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return id;
  }
};

export const removeAllNotes = async () => {
  await saveDB({ notes: [] });
};
