const mongoose = require("mongoose")

const Schema = mongoose.Schema;


const userSchema = new Schema({

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
     type: String
    },

    lastName: {
        type: String
    },

    address: {
        type: String,
    },

    phone: {
        type: Number
    },

    lat: {
        type: String
    },

    lng: {
        type: Number
    },

    cart: [
        {
            food: {
                type:Schema.Types.ObjectId,
                 ref: "Food",
                  required: true
                },

            qty : {
                type: Number,
                 required: true
                }
        }
    ],

    order: [
        {
          type: Schema.Types.ObjectId,
          ref: "Order"
        }
    ]
});

userSchema.methods.addToCart = function(foodItem) {
    const foodIndex = this.cart.foodIndex((cf)=>{
        return cf.food._d.toString() === foodItem._id.toString();
    })

    
}

module.exports = mongoose.model("User", userSchema)