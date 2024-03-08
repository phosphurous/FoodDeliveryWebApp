//mongoose that was just installed
const mongoose = require('mongoose');
//get instance of moogose schema
const Schema = mongoose.Schema;

//Create a new schema for the restaurants data in mongodb
const restaurantSchema = new Schema
({
	name: String,
	pic: String,
	description: String
});

//create a model from a schema
//mongoose.model is used to create a model and the name of the model is restaurant, which will be used to represent restaurantSchema.
//Basically a restaurant model is going to have a name, pic and description.
module.exports = mongoose.model('restaurant', restaurantSchema, 'restaurants')
//used module.exports because it is going to be used elsewhere.


//The name of the collection in the database.
