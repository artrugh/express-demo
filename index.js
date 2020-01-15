const express = require("express");
const app = express();

// this is just a simple example to learn how express mothods work

app.get("/", (req, res) => {
    res.send("Hello Word!")
});

//define a parameter
app.get("/api/courses/", (req, res) => {
    res.send([1,2,3])
})

//define a parameter
app.get("/api/courses/:id", (req, res) => {
    res.send(req.params.id)
})

//define a parameter

// app.get("/api/post/:year/:month", (req, res) => {
//     res.send(req.params)
// })

// define a sortByname
// in the browser
// http://localhost:3000/api/post/2016/2?sortBy=name
app.get("/api/post/:year/:month", (req, res) => {
    res.send(req.query)
})
const port = process.env.PORT || 3000
app.listen(port , () => console.log(`Listening on port ${port}...`))