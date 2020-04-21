const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const todo = require('./todolist.json');


const url = 'mongodb://127.0.0.1:27017/';




const dbName = 'employeedb';
const client = new MongoClient(url, { useUnifiedTopology: true })
let employeedb
let todoCollection


    (async() => {
    await client.connect();
    employeedb = client.db(dbName);
    todoCollection = employeedb.collection('todo');
    console.log("connected")
})();


router.get('/', async(req, res) => {
    const result = await todoCollection.insertMany(todo);
    const todolist = await todoCollection.find({}).toArray();
    //console.log.table(results)
    res.render('todolist', {
            todolist

        })
        //const todolist = await todoCollection.find({}).toArray();
})

module.exports = router;