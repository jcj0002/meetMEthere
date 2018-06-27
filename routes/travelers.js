const express = require('express')
const router = express.Router({ mergeParams: true })
const { TripModel, TravelersModel } = require('../db/schema')

//Get all Travelers
router.get('/', function (req, res) {
    TripModel.findById(req.params.tripId)
        .then((trip) => {
            console.log("TRIP", trip)
            const travelers = trip.travelers
            res.send({
                trip,
                travelers
            })
        })
        .catch(error => {
            console.error(error.message)
        })
})

// Add Travelers

router.post('/', function (req, res) {

    //.then(() => {}).then((data)=>{func}).then((data)=>{func}).then(()=>{}).then(()=>{}).then(()=>{})
    TripModel.findById(req.params.tripId)
        .then((trip) => {
            const newTraveler = new TravelersModel(req.body)
            trip.travelers.push(newTraveler)
            console.log("new traveler", req.body)
            return trip.save()
        })
        .then((trip) => {
            res.send({
                trip
               
            })
        })

})

//Delete travelers
router.delete ('/:id', function (req, res){
    TripModel.findById(req.params.tripId)
    .then((trip)=>{
        trip.travelers.id(req.params.id).remove()
        return trip.save()
        }) 
        .then((savedTrip) =>{
          res.send({trip: savedTrip})
        })
    
})






module.exports = router