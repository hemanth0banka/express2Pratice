const express = require("express")
const route = express.Router();
const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

route.get("/",(req,res)=>{
    let arr = []
    for(let x of courses)
    {
        arr.push(x.name)
    }
    res.status(200).send(`Courses : ${arr.toString()}`)
})
route.get("/:id",(req,res)=>{
    for(let x of courses)
    {
        if(x.id == req.params.id)
        {
            res.status(200).send(`Course: ${x.name}, Description: ${x.description}`)
        }
    }
    res.status(404).send(`Student not found`)
})
route.post("/",(req,res)=>{
    let {name} = req.body
    let obj = {
        id : courses.length + 1,
        name : name
    }
    courses.push(obj)
    res.status(201).send(obj)
})
module.exports = route