const router = require('express').Router();
const mongoose = require('mongoose');

const reservationModel = require('../models/reservation');

router.post('/api/put-item', async (req, res) =>{
    try{
        const newItem = new reservationModel({
            _id: req.body.date + 'T' + req.body.startTime + '.000Z',
            date: req.body.date,
            name: req.body.name,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
        })

        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        console.log(err)
        res.json(err);
    }
} )


router.post('/api/get-items', async (req, res) => {
    try{
        console.log(req)
        const allTodoItems = await reservationModel.find({
            date: req.body.date
        });
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})


router.delete('/api/item/:id', async (req, res)=>{
    try{
        console.log(req.params.id)
        const deleteItem = await reservationModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }catch(err){
        res.json(err);
    }
} )


module.exports = router;