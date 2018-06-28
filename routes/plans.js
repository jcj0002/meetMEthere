const express = require('express')
const router = express.Router({ mergeParams:true })
const {TripModel, PlansModel} = require('../db/schema')

//Get all Travelers
router.get('/',function (req,res) {
TripModel.findById(req.params.tripId)
.then((trip)=>{
   const plans = trip.plans
   res.send({
      plans 
   })
})
})




module.exports = router