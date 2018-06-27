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


const travelersSchema = new Schema({
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

   attendees: [travelersSchema],
    plans: [PlansSchema]




})




const TripModel = mongoose.model('Trip', TripSchema)
const travelersModel = mongoose.model('travelers', travelersSchema)
const PlansModel = mongoose.model('Plans', PlansSchema)

module.exports = {
    TripModel,
    travelersModel,
    PlansModel
}