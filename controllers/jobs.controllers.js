

exports.getAllJobs = async(req,res, next) =>{
    try{

    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            message:'The Jobs data cannot found',
            error: error.message
        })
    }
}