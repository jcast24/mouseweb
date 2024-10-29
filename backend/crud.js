import {DB} from server.js;

let createTable = `CREATE TABLE IF NOT EXISTS mice(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    weight REAL NOT NULL,
    height REAL NOT NULL,
    length REAL NOT NULL,
    width REAL NOT NULL,
    shape TEXT NOT NULL
)`;

DB.run(createTable, [], function(err) {
    if (err) {
        console.log("Error creating table: ", err.message);
        return;
    }
    console.log("Table has been created!");
});


