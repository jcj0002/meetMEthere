const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TripSchema = new Schema({
    name: {
        type: String,
        default: "New Name"

    },
    location: {
        type: String,
        default: "New Location"
    },
    date: {
        type: Date,
        default: "New Date"
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

    travelers:[TravellerSchema],
    plans: [PlansSchema]




})




const TripModel = mongoose.model('Trip', TripSchema)
const TravellerModel = mongoose.model('Traveller', TravellerSchema)
modeule.exports = {
    TripModel,
    TravellerModel
}