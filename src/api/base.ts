import { openDB, DBSchema } from "idb";

export class BaseClass {

    protected transformOptions = async (options: RequestInit): Promise<RequestInit> => {
        let token = await getToken();
        options.headers = {
            ...options.headers,
            Authorization: 'Bearer ' + token,
        };
        return Promise.resolve(options);
    }

}
interface MyDB extends DBSchema {
    Tournaments: {
      key: string;
      value: string;
    };
  }

const getToken = async () => {

    const db = await openDB<MyDB>("Tournaments", 1, {
        upgrade(db) {
          db.createObjectStore("Tournaments");
        },
      });
    return await db.get("Tournaments", "accessToken");
}
