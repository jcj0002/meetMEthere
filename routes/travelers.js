const express = require ('express')
const router = express.Router({mergeParams:true})
const { TripModel, travelersModel} = require('../db/schema')

//Get all Travelers
router.get('/', function (req, res){
    TripModel.findById(req.params.tripId).then((trips)=>{
        const travelers = trips.attendees
        res.send({
            trips,
            travelers

        })
    })
})

//Add Travelers









module.exports=router