const Jobs = require("../models/Jobs")


exports.getAllJobsService = async() =>{
    const jobs = await Jobs.find({})
    return jobs
}

exports.createAJobsService = async(data) =>{
    const result = await Jobs.create(data)
    return result
}