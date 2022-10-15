
const express = require("express");
const fs = require("fs");

const app = express();
app.set('view engine', 'ejs');

const port = 5000

app.use(express.static('public'))

const date = new Date();
app.use((req,res,next)=> {
  if (
    date.getHours() > 13 &&
    date.getHours() < 17 &&
    date.getDay() > 0 &&
    date.getDay() < 6
  ) {
    next();
  }else {
    res.send('<h1>sorry for the inconvenience we we are Closed now ,we are only available during Monday to Friday, from 9 to 17</h1>')
  }  
})

app.get("/", (req, res) => {
  res.status(200).render("HomePage.ejs", {title: "Homepage"});
});
app.get("/OurServices", (req, res) => {
  res.status(200).render("Ourservices.ejs",{title: "OurServices"});
});
app.get("/Contact", (req, res) => {
  res.status(200).render("Contact.ejs",{title: "ContactUs"});
});
app.use((req, res) => {
  res.status(404).render("Errorpage.ejs",{title: "404"});
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});