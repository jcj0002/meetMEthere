const express = require('express')
const router = express.Router({ mergeParams: true })
const { TripModel, PlansModel } = require('../db/schema')

//Get all Travelers
router.get('/', function (req, res) {
    TripModel.findById(req.params.tripId)
        .then((trip) => {
            const plans = trip.plans
            res.send({
                plans
            })
        })
})

//show a single traveler
router.get('/:id', (req, res) => {
    TripModel.findById(req.params.tripId)
    .then((trip)=>{
        const individualPlan = trip.plans.id(req.params.id)
        res.send({
            individualPlan
        })
    })
})
// Add Plans

router.post('/', function (req, res) {

    
    TripModel.findById(req.params.tripId)
        .then((trip) => {
            const newPlan = new PlansModel(req.body)
            trip.plans.push(newPlan)
            console.log("new Plan", req.body)
            return trip.save()
        })
        .then((trip) => {
            res.send({
                trip

            })
        })

})



module.exports = router