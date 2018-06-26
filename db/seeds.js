require('dotenv').config()
const mongoose = require ('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const{ TripModel, PlansModel, TravellersModel } = require('./schema')

const vacay = new PlansModel ({
    activity:'Jet Ski',
    price:'45.00',
    Date: 'Date',
    endDate: 'Date',
    description: 'Catch a wave or two on your fav waverunner!',
    duration:'60 minutes',
    image: 'https://image1.masterfile.com/getImage/NzAwLTAwMzQ1NjA1ZW4uMDAwMDAwMDA=ALcABc/700-00345605en_Masterfile.jpg'

})

const familyTrip = new TripModel({
    name: 'Smith Family Vaction',
    location: 'Hawaii',
    startDate: 'Date',
    endDate: 'Date',
    description: 'BEST TRIP EVER!',
    hotel: 'Sandals Resort',
    Image: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1489702025/waikiki-beach-honolulu-oahu-hawaii-HAISLE0316_0.jpg?itok=d4VqoOBE'
})

const attendees = new TravellersModel ({
    
})
