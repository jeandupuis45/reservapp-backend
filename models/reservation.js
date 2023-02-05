const mongoose = require('mongoose');

 const ReservationSchema = new mongoose.Schema({
    _id: String,
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
 })

 module.exports = mongoose.model('reservation', ReservationSchema);

 /*
 # Data Model

 ## Reservation

 {
    _id: {
        type: String,
        required: true,
        example: "2023-02-01T20:00:00.000Z"
    },
    date: {
        type: String,
        required: true,
        example: "2023-02-01"
    },
    name: {
        type: String,   
        required: true,
        example: "sam"
    },
    startTime: {
        type: String,
        required: true,
        example: "20:00:00.000"
    },
    endTime: {
        type: String,
        required: true,
        example: "22:00:00.000"
    },
    createdByUsername: {
        type: String,
        required: true,
        example: "micheline"
    },
    ... some other attributes
 }

## User

 {
    _id: {
        type: String,
        required: true,
        example: "micheline"
    },
    username: {
        type: String,
        required: true,
        example: "micheline"
    },
    hashedPassword: {
        type: String,
        required: true,
        example: "dhjbjsbjhcbhjsdbchjbdshbcsjbc56ghsdhggh"
    },
    rights: {
        type: String,
        required: true,
        example: "admin"
    },
 }

 ## ReservationRequest

 {
    _id: {
        type: String,
        required: true,
        example: "2023-02-01T20:00:00.000Z#total"
    },
    date: {
        type: String,
        required: true,
        example: "2023-02-01"
    },
    requester: {
        type: String,
        required: true,
        example: "total"
    },
    startTime: {
        type: String,
        required: true,
        example: "20:00:00.000"
    },
    endTime: {
        type: String,
        required: true,
        example: "22:00:00.000"
    },
    status: {
        type: String,
        required: true,
        example: "approved"
    }
    ,
    handledByUser: {
        type: String,
        required: true,
        example: "micheline"
    }
    ... some other attributes
 }

 ## Requester

 {
    _id: {
        type: String,
        required: true,
        example: "total"
    },
    requester: {
        type: String,
        required: true,
        example: "total"
    },
    hashedPassword: {
        type: String,
        required: true,
        example: "dhjbjsbjhcbhjsdbchjbdshbcsjbc56ghsdhggh"
    },
 }

 */