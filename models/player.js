const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    nickName:{
        type: String,
        trim: true,
    },

    socketId:{
        type : String,
    },

    point:{
        type: Number,
        default: 0,
    },

    playerType:{
        required: true,
        type: String,
    },
});


module.exports = playerSchema;