const express = require("express");
const books = express.Router()

let arr = [];

books.get("/",(req,res)=>{
    res.status(200).json({
        message : "Here is the list of books!",
        data : arr
    })
})

books.post("/",(req,res)=>{
    let {name} = req.body
    let obj = {
        id : arr.length+1,
        name : name
    }
    arr.push(obj)
    res.status(201).json({
        message : "Book has been added!",
        data : obj
    })
})

module.exports = books