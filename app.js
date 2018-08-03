const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;
const queries = require("./queries");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.redirect("/students");
});

app.get("/students", (req, res) => {
    queries.list().then(student => res.render("index", { student: student }));
});

app.get("/students/new", (req, res) => {
    res.render("new");
});

app.post("/students", (req, res) => {
    queries
        .create(req.body.student)
        .then(newStudent => {
            res.redirect("/");
        })
        .catch(err => {
            res.send("error: ", err);
        });
});

app.get("/students/:id", (req, res, next) => {
    queries
        .read(req.params.id)
        .then(student => {
            res.render("show", { student: student });
        })
        .catch(next);
});
app.get("/students/:id/edit", (req, res, next) => {
    queries
        .read(req.params.id)
        .then(student => {
            res.render("edit", { student: student });
        })
        .catch(next);
});

app.put("/students/:id", (req, res, next) => {
    console.log(req.body.student);

    queries
        .update(req.params.id, req.body.student)
        .then(student => {
            res.redirect("/");
        })
        .catch(next);
});

app.delete("/students/:id", (req, res, next) => {
    queries
        .delete(req.params.id)
        .then(student => {
            res.redirect("/");
        })
        .catch(next);
});

app.listen(port, () => {
    console.log("listening on port", port);
});
