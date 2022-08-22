const mongoose = require('mongoose');

const SCchema = {
    
    myteam: {
        type: String,

        required: [true, "Team name is required"],
        minLength: [3, "Name must be at least 3 characters long"],
    },

    rival: {
        type: String,

        require: [true, "Team name is required"],
        minLength: [3, "Name must be at least 3 characters long"],
    },

    country:{
        type: String,

        require: [true, "Which Country are the teams from"]
    },


    league:{
        type: String,

        require: [true, "Please add a league"]
    },

    location: {
        type: String,
        
        require: [true, "State if Home or Away game"]
    }

};



module.exports = mongoose.model("Soccer", SCchema);