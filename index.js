const express = require("express");
const app = express();

// this is just a simple example to learn how express mothods work

//add a middleware
app.use(express.json());

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" }

]

app.get("/", (req, res) => {
    res.send("Hello Word!")
});

//define a parameter
app.get("/api/courses/", (req, res) => {
    res.send(courses)
})

//define a parameter
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with the given ID was not found");
    res.send(course);
})

// POST REQUEST
app.post("/api/courses", (req, res) => {
    //simple validator
    if (!req.body.name || req.body.name.length < 3) {
        res.status(404).send("Name is required and should be minimus 3 characters");
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    //send to the user the new course
    res.send(course);
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))