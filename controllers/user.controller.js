const { getMeService } = require("../services/user.service")


exports.getMe = async(req, res) =>{
    try {
        const user = await getMeService()
        res.status(200).json({
            status: 'success',
            message:'The user is found successfully',
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }
}