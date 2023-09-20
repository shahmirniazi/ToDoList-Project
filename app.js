import express from "express";

const app = express();
const port = 5000;


app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render("index.ejs");
})
app.get("/script.js", (req, res) => {
    const scriptPath = path.join("script.js"); 
    res.sendFile(scriptPath);
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port};`)
})
