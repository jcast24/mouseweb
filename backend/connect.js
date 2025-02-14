import sqlite3 from "sqlite3";

const sql3 = sqlite3.verbose();

const DB = new sql3.Database(
    "./mice.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    connected,
);

function connected(err) {
    if (err) {
        console.error(err.message);
    }
    console.log("Connection successful");
}

export { DB };




