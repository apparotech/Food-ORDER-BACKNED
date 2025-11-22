
const {validationResult} = require("express-validator");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const user = require("../models/user");



// exports.onSignup = (req, res, next) => {
// const errors = validationResult(req);

// if(!errors.isEmpty()) {
//     const err =  new Error("Validation Error")
//     err.statusCode = 422;
//     err.data = errors.array();
//     next(err);
//     return
// }

// let email = req.body.email;
// let password = req.body.password;
// let firstName = req.body.firstName;
// let lastName = req.body.lastName;


// bcrypt
// .hash(password, 12)
// .then((hashPassword)=>{
//     const user = new User({
//        email: email,
//        password:hashPassword,
//        firstName:firstName,
//        lastName:lastName,
//        address: null,
//        phone:null,
//        lat: null,
//        cart:[],
//        order:[]
//     });

//     return user.save();
// }).then((user)=>{
//     const token = jwt.sign(
//         {userId: user._id.toString(), email: user.email},
//         APP_KEY,
//         {expiresIn: "90d"}
//     );

//     res.status(200).json(token);

// })
// .catch((err)=>{
//     if(!err.statusCode){
//         err.statusCode=500
//     }
//     next(err)
// });

// };

exports.onSignup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const err = new Error("Validation Error");
        err.statusCode = 422;
        err.data = errors.array();
        return next(err);
    }

    const {email, password, firstName, lastName} = req.body;

  try {
    const hashPassword = await bcrypt.hashPassword(password, 12)

    const user = new user({
        email: email,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName,
        phone:null,
        lat: null,
        cart:[],
        order:[]

    });

    const savedUser = await user.save();
    
  } catch (e) {

  }
    
}

exports.getCart= (req, res, next)=>{
    const userId = req.userId;

    user.findById(userId)
    .populate("cart.food")
    .then((user)=>{
        res.status(200).json(user.cart);
    })
    .catch((err)=>{

    })
}