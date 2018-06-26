let express = require ('express')
let router = express.Router()
const {TripModel} = require ('../db/schema')

// Get trip listing
router.get('/', function (req, res){
    TripModel.find().then((trips)=>{
        res.send({
            trips
        })
    })
})