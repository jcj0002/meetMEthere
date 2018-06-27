const express = require('express')
const router = express.Router({ mergeParams: true })
const { TripModel, travelersModel } = require('../db/schema')

//Get all Travelers
router.get('/', function (req, res) {
    TripModel.findById(req.params.tripId).then((trips) => {
        const attendees = trips.attendees
        res.send({
            trips,
            attendees
        })
    })
})

// Add Travelers

router.post('/', function (req, res) {

    TripModel.findById(req.params.tripId)
        .then((trip) => {
            const newTraveler = new travelersModel(req.body)
            trip.attendees.push(newTraveler)
            return trip.save()
        })
        .then((trip) => {
            res.send({
                trip
            })
        })

})







module.exports = router