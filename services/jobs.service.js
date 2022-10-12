const Jobs = require("../models/Jobs")


exports.getAllJobsService = async() =>{
    const jobs = await Jobs.find({})
    return jobs
}

exports.createAJobsService = async(data) =>{
    const result = await Jobs.create(data)
    return result
}

exports.getAJobPortalService = async(jobId) =>{
    const job = await Jobs.findOne({_id: jobId})
    return job
}

exports.updateAJobPortalService = async(data, id) =>{
    const result = await Jobs.updateOne({_id: id}, data)
    return result
}