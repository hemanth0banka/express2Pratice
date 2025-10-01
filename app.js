const express = require("express")
const app = express()
const student = require("./routes/student.js")
const courses = require("./routes/courses.js")
const port = 2003

app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).send(`Welcome to the Student & Course Portal API!`)
})
app.use('/students',student)
app.use('/courses',courses)
app.use((req,res)=>{
    res.status(404).send(`Page not found`)
})
app.listen(port,()=>{console.log(`listening at port ${port}`)})