//require express
const express = require('express');
//get the whole of express Router
const router = express.Router();
//request mongoose
const mongoose = require('mongoose');

const Restaurant = require('../models/restaurant');

const db = "mongodb://test1:test1@ds147052.mlab.com:47052/testone";
//mongoose.Promise is = to global.promise. TO avoid any warnings that mongoose states.
mongoose.Promise = global.Promise;

//connect to the database
mongoose.connect(db, {
    useMongoClient: true
},
    function(err){
        if(err){
            console.error("Error! "+ err);
        }
	});

//GET ALL RESTAURANTS.
//any incoming req send back a String.
router.get('/restaurants', function(req, res)
{
    console.log('Get request for all restaurants');
	
	//mongoose will provide a find method on the details restaurants.
    Restaurant.find({})
	//once found, execute method.
	.exec(function(err, restaurants){
	    if(err)
	    {
	        console.log("Error retrieving restaurants");
	    }
	    else
	    {
	        //send response to browser
	        res.json(restaurants);
	    }
	});
});

//GET ONE RESTAURANT.
//any incoming req send back a String.
router.get('/restaurants/:id', function(req, res)
{
    console.log('Get request for a single restaurant');
	
	//when make a request from the browser, this id will be passed over to router GET.
		//req has parameter that is called ID. Thus, will fetch a single restaurant.
	Restaurant.findById(req.params.id)
 
	//once found, execute method.
	.exec(function(err, restaurant){
	    if(err)
	    {
	        console.log("Error retrieving restaurant");
	    }
	    else
	    {
	        //send response to browser
	        res.json(restaurant);
	    }
	});
});

//POST NEW RESTAURANT(S)
//When a post request comes in, to the ../api/restaurant
router.post('/restaurant', function (req, res) {
    //it will log in the console.
    console.log('Post a restaurant');
    //creating a new object with the name,pic and description
    var newRestaurant = new Restaurant();
    newRestaurant.name = req.body.name;
    newRestaurant.pic = req.body.pic;
    newRestaurant.description = req.body.description;
    //save into the database.
    newRestaurant.save(function (err, insertedRestaurant) {
        if (err) {
            console.log('Error saving restaurant');
        }
        else {
            res.json(insertedRestaurant);
        }
    });
});

router.put('/restaurant/:id', function(req, res){
	//log console.
	console.log('Update a restaurant');
	
	//GET the restaurant model then mongoose will do the findBy.. method.
		//to update the restaurant based on its ID.
		//___.id will be retrieved from the request from 'router.put'
	Restaurant.findByIdAndUpdate(req.params.id,
	{
		//set of new or updated values for the restaurant that was fetched using the ID.
			//For eg, if the restaurant id is equal to 1, at routerput ../:1, then its name, pic and description will be updated with new params(name,pic.descript).
		$set: {name: req.body.name, pic: req.body.pic, description: req.body.description}
	},//When you submit it, it will captured in this ^ (req.body.)
	{
		new: true // if this is true, 'updatedRestaurant' method will return the updated Restaurant with new set of values. 
		//if this is false, original restaurant will be returned before updated values.
	}, 
	function(err, updatedRestaurant)
	{
		if (err)
		{
			res.send("Error updating restaurant");
		}
		else 
		{
			res.json(updatedRestaurant);
		}
	}
	
	);	
});


//DELETE restaurant
router.delete('/restaurant/:id', function(req, res){
	console.log('Deleting a restaurant');
	
	//findByIdAndRemove is a mongoose method.
	//this id has the same as the id that was passed from the url.
	Restaurant.findByIdAndRemove(req.params.id, function(err, deletedRestaurant){
		if (err)
		{
			res.send("Error deleting restaurant");
		}
		else
		{
			res.json(deletedRestaurant);
		}	
	});
});

//export router.
module.exports = router;

