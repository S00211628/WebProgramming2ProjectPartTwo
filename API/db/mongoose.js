// This file will handle connection logic to the MongoDb database.
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/DeliveryManager', {useNewUrlParser:true}).then(() => {
    console.log('Connected to MongoDB Sucessuflly')
}).catch((err) => {
    console.log("something went wrong " + err)
});

// To prevent deprecation warnings (from MongDB native driver)
module.exports = {
    mongoose
}