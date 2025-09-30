const express = require("express")
const app = express()
const port = 2004
app.use(express.json())
app.get("/user/:id",(req,res)=>{
    let name = req.query.name
    let role = req.query.role
    res.status(200).send(` Welcome ${name}, your role is ${role}`)
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})