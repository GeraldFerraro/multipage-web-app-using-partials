import express from "express";

const app = express();
const port = 3000;

//specify location of the public folder so express knows, then we can use relative paths
app.use(express.static("public"));

app.get("/", (req,res) => {
  res.render("index.ejs");
});

app.get("/about", (req,res) => {
  res.render("about.ejs");
});

app.get("/contact", (req,res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
