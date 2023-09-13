const { StatusCodes } = require("http-status-codes")


//regester  user controller
const register = async(req,res) => {
    try{
        res.json({msg: "register"})
    }catch (err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
    }
}



//login  user  controller
const login = async(req,res) => {
    try{
        res.json({msg: "login"})
    }catch (err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
    }
}

// logout  user  controller
const logout = async(req,res) => {
    try{
        res.json({msg: "logout"})
    }catch (err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
    }
}
//get token   controller
const getToken = async(req,res) => {
    try{
        res.json({msg: "getToken"})
    }catch (err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})


    }
}

const getCurrentUser = async (req,res) => {
    try{
        res.json({msg: "getToken"})
    }catch (err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})


    }


}

module.exports = {register,login,logout,getToken,getCurrentUser}




