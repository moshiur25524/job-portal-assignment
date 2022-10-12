const e = require("express")
const Jobs = require("../models/Jobs")
const { createAJobsService, getAllJobsService } = require("../services/jobs.service")


exports.getAllJobs = async(req,res, next) =>{
    try{
        const jobs = await getAllJobsService()

        res.status(200).json({
            status: 'success',
            message:'All the jobs portal is found',
            data: jobs
        })
    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            message:'The Jobs data cannot found',
            error: error.message
        })
    }
}

exports.CreateAJob = async(req, res , next) =>{
    try {

        const job = await createAJobsService(req.body)

        res.status(200).json({
            status: 'success',
            message: 'The Job Portal creation is successful',
            data: job
        })
        
    } catch (error) {
        res.status(401).json({
            status: 'fail',
            message:'The Job portal creation is failed',
            error: error.message
        })
    }
}