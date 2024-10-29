import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("LISTENING on port 3000");
});
