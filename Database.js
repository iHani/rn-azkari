import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Prayers.db", "1.0");

export default class Database {
  initDB() {
    return new Promise((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql("CREATE TABLE azkari (userId, userName, prayers);");
        },
        error => {
          reject(error);
        },
        success => {
          resolve(success);
        }
      );
    });
  }

  addUsersToDB(data) {
    return new Promise((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql("INSERT INTO azkari VALUES (?, ?, ?)", [
            data.id,
            data.name,
            JSON.stringify(data.prayers)
          ]);
        },
        error => {
          reject(error);
        },
        success => {
          resolve(success);
        }
      );
    });
  }

  listProduct() {
    return new Promise(resolve => {
      db.transaction(tx => {
        tx.executeSql("SELECT * from azkari", [], (_, { rows: { _array } }) =>
          resolve(_array)
        );
      });
    });
  }

  updatePrayers(id, data) {
    return new Promise((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql("UPDATE azkari SET prayers = ? WHERE userId = ?", [
            JSON.stringify(data),
            id
          ]);
        },
        error => {
          reject(error);
        },
        success => {
          resolve(success);
        }
      );
    });
  }
}
