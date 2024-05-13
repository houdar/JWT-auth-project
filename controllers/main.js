const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')
const login = (req, res) =>{ 
    //to check for the user and password we can either : 
    //mongoose validation 
    //joi package 
    //check in controller and throw and error 
    const { username , password} = req.body
    console.log( username , password);
    if (!username || !password){ 
     throw new CustomAPIError('both username and password sould be provided', 400)
    }
    const id = new Date().getDate()
    //in the tocken we provide three values : the payload , the JWT secret . and the when the tocken will be expired 
    const tocken = jwt.sign({id,  username},process.env.JWT_SECRET ,{expiresIn :'2d'} )
    res.status(200).json({msg:'user created',tocken})
}

   //dashboard
const dashboard = async (req, res) =>{
   console.log(req.user);
   

    const randonNum = Math.floor(Math.random()*100)
    res.status(200).json({msg:`hello ${req.user.username}` , secret:`your auth secret number is ${randonNum}`})
}

module.exports ={dashboard, login}