import fs from "node:fs/promises";

const DB_PATH = new URL("../db.json", import.meta.url).pathname;

console.log(DB_PATH);

// get all the database
export const getDb = async () => {
  const filePath = new URL("../db.json", import.meta.url).pathname;
  const db = await fs.readFile(filePath, "utf-8");
  return JSON.parse(db);
};
// get new note database and rewrite the database before
export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 4));
  return db;
};

//insert a new note means adding a note database

export const insertDB = async (note) => {
  const db = await getDb();
  db.notes.push(note);
  saveDB(db);
  return note;
};
