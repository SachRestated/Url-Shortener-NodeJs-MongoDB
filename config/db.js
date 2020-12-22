const mongoose = require("mongoose")
const config = require('dotenv').config()

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected')
    } catch(error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;