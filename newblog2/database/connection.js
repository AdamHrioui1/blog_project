const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://userone:useroneuserone@cluster0.b41nv.mongodb.net/?retryWrites=true&w=majority'
const connection = async () => {
    try {
        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Connection successfuly!!!', con.connection.host)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = connection