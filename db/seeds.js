require('dotenv').config()
const mongoose = require ('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const{ TripModel, PlansModel, TravellersModel } = require('./schema')
const now = Date.now()

const vacay = new PlansModel ({
    activity:'Jet Ski',
    price:'45.00',
    Date: now,
    description: 'Catch a wave or two on your fav waverunner!',
    duration:'60 minutes',
    image: 'https://image1.masterfile.com/getImage/NzAwLTAwMzQ1NjA1ZW4uMDAwMDAwMDA=ALcABc/700-00345605en_Masterfile.jpg'

})



const invitee = new TravellersModel ({
    name:'Jane Smith',
    userName: 'janesmith',
    email: 'fake001@att.net',
    image:'https://images.unsplash.com/photo-1492633342445-8408e4c17712?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb16f02a1c9a8c3f41271b9f937282b2&auto=format&fit=crop&w=1400&q=60'
    
})

const familyTrip = new TripModel({
    name: 'Smith Family Vaction',
    location: 'Hawaii',
    departureDate: now,
    returnDate: now,
    description: 'BEST TRIP EVER!',
    hotel: 'Sandals Resort',
    Image: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1489702025/waikiki-beach-honolulu-oahu-hawaii-HAISLE0316_0.jpg?itok=d4VqoOBE',
    attendees:[invitee],
    plans:[vacay]
})

TripModel.remove({})
.then(()=> familyTrip.save())
.then(()=> console.log ('Successful Save'))
.then(()=> mongoose.connection.close())

