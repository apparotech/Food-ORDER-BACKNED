

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

    ing: {
        type: Number
    },

    cart: [
        {
            food: {type:Schema.Type.ObjectUd, ref: "Food", required: true},
            qty : {type: Number, required: true}
        }
    ],

    order: [
        {
          type: Schema.Type.ObjectId,
          ref: "Order"
        }
    ]
})