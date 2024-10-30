import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { DB } from "./connect.js";

// express stuff
const app = express();
const PORT = 3000;

// cors stuff
const corsOptions = {
    origin:["http://localhost:3000"],
}
app.use(cors(corsOptions));

// bodyParser.json() converts the json string into a JS object
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Everything is working!");
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("LISTENING on port 3000");
});
