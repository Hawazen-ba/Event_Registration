const mongoose = require ('mongoose');

const registration = new mongoose.Schema({
    event : {
        type : mongoose.Schema.Types.ObjectId, ref : 'Event',
        required : true

    },
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Registration', registration);