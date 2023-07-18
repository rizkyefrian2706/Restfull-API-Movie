const fs = require('fs')
const path = require('path')
const { movie } = require('../models')

exports.index = (req, res) => {
    movie.findAll()
    .then(function (result) {
        res.json(result);
    })
    .catch(function (error) {
        res.json({ message_error: error.message });
    });
}

exports.show = (req, res) => {
    let id = req.params.id
    movie.findOne({ where: {id} })
    .then(function (result) {
        res.json(result);
    })
    .catch(function (error) {
        res.json({ message_error: error.message });
    });
}

exports.create = (req, res) => {
    movie.create(req.body)
    .then(function (result) {
        res.json(result);
    })
    .catch(function (error) {
        console.log(error.original);
        res.json({ message_error: error.message });
    });
}

exports.update = (req, res) => {
    let id = req.params.id
    movie.update(req.body, { where: {id} })
    .then(function (result) {
        res.json({ id: result[0] });
    })
    .catch(function (error) {
        res.json({ message_error: error.message });
    });
}

exports.delete = (req, res) => {
    let id = req.params.id
    movie.destroy({ where: {id} })
    .then(function (result) {
        console.log("result: ", result);
        if(result == 0){
            res.json({ message: "Data Not Found" });
        }else{
            res.json({ message: "Deleted Data Success" });
        }
    })
    .catch(function (error) {
        res.json({ message_error: error.message });
    });
}
