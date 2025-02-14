import sqlite3 from "sqlite3";

const sql3 = sqlite3.verbose();

const DB = new sql3.Database(
    "./mice.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    connected,
);

let createTable = `CREATE TABLE IF NOT EXISTS mice(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    weight REAL NOT NULL,
    height REAL NOT NULL,
    length REAL NOT NULL,
    width REAL NOT NULL,
    shape TEXT NOT NULL
)`;


function connected(err) {
    if (err) {
        console.error(err.message);
    }
    console.log("Connection successful");
}


DB.run(createTable, [], function(err) {
    if (err) {
        console.log("Error creating table: ", err.message);
        return;
    }
    console.log("Table has been created!");
});

export { DB };




