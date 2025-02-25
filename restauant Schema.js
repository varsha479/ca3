const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "available",
    }
});

module.exports=mongoose.model("restaurants",restaurantSchema);
