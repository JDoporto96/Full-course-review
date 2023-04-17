const express = require('express');
var fs = require('fs');
const cors = require('cors')

const app = express();


app.use(cors());
app.use(express.json());
app.get("/gallery/length", (req, res) => {
    fs.readFile("./dataFile.json", (err, json)=>{
        const gallery = JSON.parse(json);
        res.json(gallery.length)
    })

});

app.get("/gallery/:page", (req, res) => {
    fs.readFile("./dataFile.json", (err, json)=>{
        const gallery = JSON.parse(json);
        const { page } = req.params;
        const galleryPage = gallery[page];  
        res.send({
            images:galleryPage.images,
            page: galleryPage.page,
        });
    })

});

app.listen(5000, () => {
  console.log("Server runnin on port 5000");
});