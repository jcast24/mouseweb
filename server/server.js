import sqlite3  from "sqlite3";
import express from "express";

const app = express();
const port = 3000;

const sql3 = sqlite3.verbose();

const DB = new sql3.Database("./mice.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, connected);

function connected(err) {
    if (err) {
       console.error(err.message); 
    }
    console.log("Connection successful");
}

app.get("/", (req, res) => {
    res.send("Hello!");
})


app.listen(port, ()=> {
    console.log(`Server running on ${port}`);
});


