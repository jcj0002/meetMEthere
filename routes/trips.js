let express = require('express')
let router = express.Router()
const { TripModel } = require('../db/schema')

// Get trips listing
router.get('/', function (req, res) {
    TripModel.find().then((trips) => {
        res.send({
            trips
        })
    })
})

router.get('/:id', (req, res) => {
    TripModel.findById(req.params.id)
        .then((trip) => {
            res.send({
                trip

            })
        })
})




//Create new trip
router.post('/', (req, res) => {
    const newTrip = new TripModel(req.body)
    newTrip.save().then((trip) => {
        res.send(trip)
    })
})

//Update trip

router.put('/:id', (req, res) => {
    TripModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((trip) => {
        res.send({ trip: trip })
    })

})

//Delete trip
router.delete('/:id', (req, res) => {
    TripModel.findByIdAndRemove(req.params.id, req.body).then((trip) => {
        console.log('Deleted')
        res.send(trip)

    })
})


module.exports = router