const express = require("express");


const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());



server.get('/', async (req,res,next)=>{
    try{
        const accounts = await db("cars")
        res.status(200).json(accounts)
    }
    catch (e) {
        next(e)
    }
})

server.post('/', async(req,res,next)=>{
    try{
        const [itemer] = await db('cars')
            .insert({
                vin:req.body.vin,
                make:req.body.make,
                model:req.body.model,
                mileage:req.body.mileage,
                transmission:req.body.transmission,
                titleStatus:req.body.titleStatus
            })
        const returnerItem = getByID(itemer)
        console.log(`item numner is ${itemer} '`)
        res.status(200).json(returnerItem)
    }
    catch (e) {
        next(e)
    }
})

server.put('/:id', async (req,res,check)=>{
    try{
        const editItem = await db('cars')
            .update({
                vin:req.body.vin,
                make:req.body.make,
                model:req.body.model,
                mileage:req.body.mileage,
                transmission:req.body.transmission,
                titleStatus:req.body.titleStatus
            })
            .where('id',req.param.id)
        const current = await getById(req.params.id)
        res.status(201).json(current)
    }
    catch (e) {
        next(e)
    }
})

server.delete('/:id', async(req,res,check)=>{
    try{
        const deletedData = await getById(req.params.id)
        await db('cars')
            .delete('*')
            .where('id', req.params.id)
        res.status(201).json(deletedData)
    }
    catch (e) {
        next(e)
    }
})

async  function getByID(id){
    try{
        const itemCurrent = await db('cars')
            .where('id', id)
            .first()
        return itemCurrent
    }
    catch (e) {
        next(e)
    }
}


module.exports = server;
