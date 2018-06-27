const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PlansSchema = new Schema({
    activity: {
        type: String,
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
    },
    description: {
        type: String,
    },
    duration: {
        type: String,

    },
    image: {
        type: String
    }

})


const TravelersSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },

    email: {
        type: String
    },
    image: {

        type: String

    }


})

const TripSchema = new Schema({
    name: {
        type: String,
        default: "New Name"

    },
    location: {
        type: String,
        default: "New Location"
    },
   departureDate: {
        type: Date,
    
    },
    returnDate:{
        type: Date,
    
    },
    description: {
        type: String
    },
    hotel: {
        type: String
    },
    image: {
        type: String
    },

   travelers: [TravelersSchema],
    plans: [PlansSchema]




})




const TripModel = mongoose.model('Trip', TripSchema)
const TravelersModel = mongoose.model('travelers', TravelersSchema)
const PlansModel = mongoose.model('Plans', PlansSchema)

module.exports = {
    TripModel,
    TravelersModel,
    PlansModel
}