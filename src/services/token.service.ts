import { openDB, DBSchema } from "idb";

interface MyDB extends DBSchema {
    Tournaments: {
      key: string;
      value: string;
    };
  }


  export const clear = async () => {
    const db = await openDB<MyDB>("Tournaments", 1, {
        upgrade(db) {
            db.createObjectStore("Tournaments");
        },
    });

    await db.clear("Tournaments");
  }

  export const dbPut = async (value:string, key: string | IDBKeyRange | undefined ) => {
    const db = await openDB<MyDB>("Tournaments", 1, {
        upgrade(db) {
            db.createObjectStore("Tournaments");
        },
    });

    await db.put("Tournaments", value, key);
  }

  export const dbGet = async ( key: string | IDBKeyRange ) => {
    const db = await openDB<MyDB>("Tournaments", 1, {
        upgrade(db) {
          db.createObjectStore("Tournaments");
        },
      });
    return await db.get("Tournaments", key);
  }