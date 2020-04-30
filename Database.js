import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Prayers.db", "1.0");

// Reset database
// db.transaction(
//   (tx) => {
//     tx.executeSql("DROP TABLE az_dev;");
//   },
//   (error) => {
//     reject(error);
//   },
//   (success) => {
//     resolve(success);
//   }
// );

export default class Database {
  initDB() {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("CREATE TABLE az_dev (userId, userName, prayers);");
        },
        (error) => {
          reject(error);
        },
        (success) => {
          resolve(success);
        }
      );
    });
  }

  addUsersToDB(data) {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("INSERT INTO az_dev VALUES (?, ?, ?)", [
            data.id,
            data.name,
            JSON.stringify(data.prayers),
          ]);
        },
        (error) => {
          reject(error);
        },
        (success) => {
          resolve(success);
        }
      );
    });
  }

  listProduct() {
    return new Promise((resolve) => {
      db.transaction((tx) => {
        tx.executeSql("SELECT * from az_dev", [], (_, { rows: { _array } }) =>
          resolve(_array)
        );
      });
    });
  }

  updatePrayers(id, data) {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("UPDATE az_dev SET prayers = ? WHERE userId = ?", [
            JSON.stringify(data),
            id,
          ]);
        },
        (error) => {
          reject(error);
        },
        (success) => {
          resolve(success);
        }
      );
    });
  }
}
