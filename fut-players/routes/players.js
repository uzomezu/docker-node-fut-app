const express = require('express');
const router = express.Router();
const db = require('../database.js');

router.get('/all', (req,res)=>{
    db.Player.findAll()
        .then(players => {
            res.status(200).send(JSON.stringify(players));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.get("/:id", (req,res)=>{
    db.Player.findByPk(req.params.id).then().catch();
})

router.post("/", function(req,res){
    db.Player.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        squadNumber: req.body.kitNumber,
        id: req.body.id
    })
        .then(player => {
            res.status(200).send(JSON.stringify(player))
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
        res.status(200).send();
    })
    .catch(err=>{
        res.status(500).send(JSON.stringify(err))
    })
})

module.exports = router;