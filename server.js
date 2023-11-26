const express = require('express');
const path = require("path");


//initialize express app
const app = express();


app.set("views", path.join(__dirname, "public", "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/contactcard', async (req,res) => {
    var contactCard = { Linkedin:"https://www.linkedin.com/in/diana-majolli-andre-855851bb/", GitHub:"https://github.com/dianamajolli" };
    res.json(contactCard);
})

app.use((req, res) => {
    res.status(404).sendFile('public/views/404.html', { root: __dirname });
});


app.listen(3000, () => {
       console.log("Current Port : 3000 . . .")
});