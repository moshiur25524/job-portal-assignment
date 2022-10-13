const User = require("../models/User")


exports.getMeService = async() =>{
    const result = await User.find({})
}