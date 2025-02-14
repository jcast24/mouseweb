import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { DB } from "./connect.js";

// express stuff
const app = express();
const PORT = 3000;

// cors stuff
const corsOptions = {
    origin: ["http://localhost:3000"],
}
app.use(cors(corsOptions));

// bodyParser.json() converts the json string into a JS object
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Everything is working!");
});

/* 
 * /api/items
 * 
 * Show all the items
*/

app.get("/api/items", (req, res) => {
    const getAllItems = "SELECT * FROM mice";
    
    DB.all(getAllItems, [], function(err, rows) {
        if(err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(rows);
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("LISTENING on port 3000");
});
