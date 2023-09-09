const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginHandle = async (req, res)=>{
    const user = req.body.username
    const pwd = req.body.password

    if(!user || !pwd) return res.status(400).json({'message':'Username and password are required.'})

    const matchUser = await User.findOne({username: user}).exec()

    if(!matchUser) return res.status(401).json({'message':`No user with ${user} exists`})
    try {
        const comparePwd = await bcrypt.compare(pwd, matchUser.password)
        if(!comparePwd) return res.status(400).json({'message':`Wrong username and password combination`})
        //creating jwts
        const accessToken = jwt.sign(
            {"username": matchUser.username,"cart":matchUser.cart},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '15m'}
        )
        //archive.js content for refreshToken
        
        res.json({accessToken, user})
    } catch (error) {
        console.log(error);
        res.sendStatus(401);
    }    
}

module.exports = loginHandle