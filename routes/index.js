var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// our db models
var Person = require("../models/person.js");
var Course = require("../models/course.js");

/**
 * GET '/'
 * Default home route. Just relays a success message back.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/', function(req, res) {

  var jsonData = {
  	'name': 'itp-directory',
  	'api-status':'OK'
  }

  // respond with json data
  res.json(jsonData)
});

router.get('/add-person', function(req,res){

  res.render('add.html')

})

router.get('/directory', function(req,res){

  res.render('directory.html')

})


router.post('/api/create', function(req,res){

  console.log('!!!!!GOT HERE!!!!!!')
  console.log(req.body);

  var personObj = {
    name: req.body.name,
    itpYear: req.body.itpYear,
    interests: req.body.interests.split(','),
    link: req.body.link,
    imageUrl: req.body.imageUrl  
  }

  var person = new Person(personObj);

  person.save(function(err,data){
    if(err){
      var error = {
        status: "ERROR",
        message: err
      }
      return res.json(err)
    }

    var jsonData = {
      status: "OK",
      person: data
    }

    return res.json(jsonData);

  })

})


router.get('/api/get', function(req,res){

  Person.find(function(err,data){

      if(err){
        var error = {
          status: "ERROR",
          message: err
        }
        return res.json(err)
      }

      var jsonData = {
        status: "OK",
        people: data
      }

      return res.json(jsonData);

  })

})





module.exports = router;







