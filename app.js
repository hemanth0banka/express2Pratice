const express = require("express")
const app = express()
const books = require("./books.js")
const port = 2001

app.use(express.json())

app.use("/books",books)
app.use((req,res)=>{
    res.status(404).send(`Page Not Found`)
})

app.listen(port,()=>{console.log(`listening at port ${port}`)})