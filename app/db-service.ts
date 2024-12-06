import { openDatabase, SQLiteDatabase, enablePromise} from "react-native-sqlite-storage";

export const createTable = async (db: SQLiteDatabase) => {
  const query = `create table if not exists food (
    value text not null
  );`;

  await db.executeSql(query, []);
}
export const getDBConnection = async () => {
  return openDatabase({ name: "food.db", location: "default"});
}

enablePromise(true);

export default () => {
  return {
    createTable,
    getDBConnection
  }
}