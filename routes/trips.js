let express = require('express')
let router = express.Router()
const { TripModel } = require('../db/schema')

// Get trip listing
router.get('/', function (req, res) {
    TripModel.find().then((trips) => {
        res.send({
            trips
        })
    })
})
//Create new trip
router.post('/', (req, res)=>{
    const newTrip = new TripModel(req.body)
    newTrip.save().then((trip)=>{
        res.send(trip)
    })
})

//Update trip

router.put('/:id', (req, res)=>{
TripModel.findByIdAndUpdate (req.params.id, req.body, {new:true}).then((trip)=>{
    res.send({trip:trip})
})

})

//Delete trip



module.exports = router