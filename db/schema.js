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


const TravellersSchema = new Schema({
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

   attendees: [TravellersSchema],
    plans: [PlansSchema]




})




const TripModel = mongoose.model('Trip', TripSchema)
const TravellersModel = mongoose.model('Travellers', TravellersSchema)
const PlansModel = mongoose.model('Plans', PlansSchema)

module.exports = {
    TripModel,
    TravellersModel,
    PlansModel
}