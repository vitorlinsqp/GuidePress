const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

//view engine
app.set("view engine", "ejs");

//static(css,img,file of frontend)
app.use(express.static('public'));

//body-parse -> to work with forms
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//database
connection.authenticate().then(() => {
  console.log("Success connection!");
}).catch((error) => {
  console.log(error);
})


app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
  res.render("index");
})

app.listen(8080, () => {
  console.log("Server works fine..")
})