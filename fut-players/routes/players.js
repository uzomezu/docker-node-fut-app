const express = require('express');
const router = express.Router();
const db = require('../database.js');

router.get('/all', (req,res)=>{
    db.Player.findAll()
        .then(players => {
            res.status(200).json(players);
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.get("/:id", (req,res)=>{
    db.Player.findByPk(req.params.id)
    .then(player=>res.status(200).json(player))
    .catch(err=>res.status(500).json(err));
})

router.put("/", function(req,res){
    db.Player.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        squadNumber: req.body.squadNumber,
        id: req.body.id
    })
        .then(player => {
            res.status(200).json(player)
        })
        .catch(err=>{
            res.status(500).send(JSON.stringify(err))
        })
})

router.delete("/:id", function(req,res){
    db.Player.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(()=>{
        res.status(200).json({message: "item has been deleted!"});
    })
    .catch(err=>{
        res.status(500).send(JSON.stringify(err))
    })
})

module.exports = router;