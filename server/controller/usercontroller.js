const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usermodel = require('../model/usermodel')


const signup = async (req, res) => {
    try {

        //get user password and email of req
        const { email, password } = req.body

        //Hash password
        const hashpassword = bcrypt.hashSync(password, 8)

        //create the user
        await usermodel.create({ email, password: hashpassword })

        //respond to client
        res.sendStatus(200)
    }
    catch (error) {
        console.log(error)
    }

}
const login = async (req, res) => {
    try {
        //get email and password off req
        const { email, password } = req.body

        //find user by email
        const user = await usermodel.findOne({ email })
        if (!user) return res.sendStatus(401)

        //chack password match
        const passwordmatch = bcrypt.compareSync(password, user.password)
        if (!passwordmatch) return res.sendStatus(401)

        // create jwt
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET)

        //set cookie
        // res.cookie("Authorization",token,{
        //     expires:new Date(exp),
        //     httpOnly:true,
        //     sameSite:'lax',
        // })

        //send it
        res.json({ token: token })
    }
    catch (error) {
        res.sendStatus(400)
    }

}
const logout = (req, res) => {
    try {
        res.clearCookie("Authorization");
        res.sendStatus(200)
    }
    catch (error) {
        res.sendStatus(400)
    }

}
const checkAuth = (req, res) => {
    try {
        console.log(req.user)
        res.sendStatus(200)
    }

    catch (error) {
        res.sendStatus(400)

    }
}
module.exports =
{
    signup,
    login,
    logout,
    checkAuth
}