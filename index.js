const express = require('express');
const app = express();
const path = require("path")
const db = require("./database/connection")

const PORT = 3000;

    app.get("/", (req,res)=>{
        res.json({ message: "Hello API"});
    })

    //Public static
    app.use(express.static(path.join(__dirname,"/public")))

app.listen(PORT,()=>{
    console.log(`app running on url http://localhost:${PORT}`);
})