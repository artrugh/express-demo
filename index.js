const express = require("express");
const app = express();

// this is just a simple example to learn how express mothods work

app.get("/", (req, res) => {
    res.send("Hello Word!")
});

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3])
})

//create a environment variable
// PORT process object
// means if it setted use it, if not 3000 
const port = process.env.PORT || 3000
// we can set the port in the terminal
// export PORT = 5000
app.listen(port , () => console.log(`Listening on port ${port}...`))