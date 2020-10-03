const express = require('express');

const app= express();

const searchRoute = express.Router();

let searchModel =require('../database/search');

searchRoute.route('/').get(function (req, res) {
    searchModel.find(function (err, seersearch) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(seersearch);
        }
    });
});

//Submitter Submits article

searchRoute.route('/submitter').post(function (req, res){
    let seersearch = new searchModel(req.body);
  seersearch.save().then(game=>{
        res.status(200).json({'seersearch':'Article Added Successfully'});
    }).catch(err=>{res.status(400).send(err);
});
});



module.exports = searchRoute;







