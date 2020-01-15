const express = require("express");
const app = express();

// this is just a simple example to learn how express mothods work

app.get("/", (req, res) => {
    res.send("hello word")
});

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3])
})
app.listen(3000, () => console.log("listening on port 3000 ..."))