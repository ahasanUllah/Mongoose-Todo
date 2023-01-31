const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const todoSchema = require('../Schema/todoSchema')
const Todo = new mongoose.model("Todo", todoSchema);

// Get all the todo
router.get('/', async(req, res) => {

})

// Get a the todo
router.get('/:id', async(req, res) => {
    
})

// Post a todo
router.post('/', async(req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save(err => {
        if(err){
            res.status(500).json({
                error: "There was a server side error!"
            })
        }
        else{
            res.status(200).json({
                message: "Todo was inserted successfully"
            })
        }
    })
})

// Post multiple todo
router.post('/all', async(req, res) => {
    const body = req.body;
    Todo.insertMany(body, (err) => {
        if(err){
            res.status(500).json({
                error: "There is a server side error!"
            });
        }else{
            res.status(200).json({
                message: "Todo were inserted successfully!"
            })
        }
    })
})

// Put todo
router.put('/:id', async(req, res) => {
    try {
        await Todo.updateOne({_id: req.params.id}, {
            $set: {
                status: 'active'
            }
        });
        res.status(200).json({message: "Todo was updted successfully"})
    }
    catch(error){
        res.status(500).json({error: "There was a Server side error"})
    }
        
})



// Delete todo
router.delete('/:id', async(req, res) => {
    
})

module.exports = router;