const express = require("express");
const route = express.Router()
const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];
route.get("/",(req,res)=>{
    let arr = []
    for(let x of students)
    {
        arr.push(x.name)
    }
    res.status(200).send(`Students : ${arr.toString()}`)
})
route.get("/:id",(req,res)=>{
    for(let x of students)
    {
        if(x.id == req.params.id)
        {
            res.status(200).send(`Student: ${x.name}`)
        }
    }
    res.status(404).send(`Student not found`)
})
route.post("/",(req,res)=>{
    let {name} = req.body
    let obj = {
        id : students.length + 1,
        name : name
    }
    students.push(obj)
    res.status(201).send(obj)
})

module.exports = route