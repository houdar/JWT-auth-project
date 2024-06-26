const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const authMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new CustomAPIError('No tocken provided!', 401)
    }
    const tocken = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(tocken,process.env.JWT_SECRET)
        const{id , username}= decoded
        req.user = {id, username}
        next()
       } catch (error) {
        throw new CustomAPIError('Not authorized to access this route ', 401)
       }
}


module.exports= authMiddleware;