const express = require('express');
const passport  = require('passport');

const passportService = require('../services/passport');

const protectedRoute = passport.authenticate('jwt', { session: false })
const router = express.Router();


const Memory = require('../models/memories')
// middleware
const getMemory = async (req, res, next) => {
    let memory
    try {
        memory = await Memory.findById(req.params.id)
        if (memory === null) {
            return res.status(404).json({ message: 'memory not found' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    console.log(`Memory: ${memory}`)
    res.memory = memory;
    next();
}


//get all
router.get('/', protectedRoute, async (req, res) => {
    try{
        const memories = await Memory.find()
        res.json(memories)
    }catch (error) {
        res.status(500).json({message: error.message})
    }
});
//get by id
router.get('/:id', getMemory, async (req, res) => {
    res.json(res.memory)
});

//create
router.post('/', async (req, res) => {
    const memory = new Memory({
        name: req.body.name,
        description: req.body.description,
        message: req.body.message
    })
    try {
        const newMemory = await memory.save();
        res.status(201).json(newMemory)
    } catch (error) {
        res.status(400).json({message: error.message, })
    }
});
// patch update
router.patch('/:id', getMemory, async (req, res) =>{
    if (req.body.name != null) {
        res.memory.name = req.body.name
    }
    if (req.body.description != null) {
        res.memory.description = req.body.description
    }
    if (req.body.message != null) {
        res.memory.message = req.body.message
    }
    try {
        const updatedMemory = await res.memory.save()
        res.json({message:'Updated Memory'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});
// delete
router.delete('/:id', getMemory, async (req, res) =>{
    try {
        await res.memory.remove()
        res.json({message: 'Removed Memory'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});
    
    
    module.exports = router;