const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'You have to provide the name'],
        trim: true,
        unique: [true, 'Name must be unique'],
        lowercase: true,
        minLength: [3, 'Name must be at least 3 character'],
        maxLength: [100, 'Too large name']
    },
    description:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    job_Type:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = Jobs