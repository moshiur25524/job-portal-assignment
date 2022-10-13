const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please Provide your name'],
        trim: true,
        lowercase: true,
        minLength:[3, 'please provide at least 3 character'],
        maxLength: [100, 'Too long name']
    },
    email:{
        type: String,
        required: true,
        vaildate: [validator.isEmail, 'Please provide the valide Email'],
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        requied: [true, 'please Provide your password'],
        validate:{
            validator: (value) =>{
                validator.isStrongPassword(value,{
                    minLength:6,
                    minLowercase: 3,
                    minNumbers:1,
                    minUppercase:1
                })
            },
            message:`The password {VALUE} is not strong enough`
        },
        confirmPassword:{
            type: String,
            required: [true, 'Please Confirm your Password'],
            validate:{
                validator: function(value){
                    return value === this.password
                }
            },
            message:"Password don't matched !"
        },
        role:{
            type: String,
            enum:["candidate","hiring manager","admin"],
            defalut: "candidate"
        },
        contactNumber:{
            type: Number,
            validate:[validator.isMobilePhone , 'Please Provide a valid contact number']
        }
        
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User