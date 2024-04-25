const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3001

app.get("/", (req,res) => {
    res.json({
        "status": "ok",
    })
}) 

app.listen(3001 , () => console.log("Server On"))