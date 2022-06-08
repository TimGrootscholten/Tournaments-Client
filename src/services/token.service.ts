import { openDB, DBSchema, IDBPDatabase } from "idb";

interface MyDB extends DBSchema {
  Tournaments: {
    key: string;
    value: string;
  };
}

async function getTournamentsDb(): Promise<IDBPDatabase<MyDB>> {
  return await openDB<MyDB>("Tournaments", 1, {
    upgrade(db) {
      db.createObjectStore("Tournaments");
    },
  });
}


export const clear = async () => {
  const db = await getTournamentsDb();
  await db.clear("Tournaments");
}

export const dbPut = async (value: string, key: string | IDBKeyRange | undefined) => {
  const db = await getTournamentsDb();
  await db.put("Tournaments", value, key);
}

export const dbGet = async (key: string | IDBKeyRange) => {
  const db = await getTournamentsDb();
  return await db.get("Tournaments", key);
}