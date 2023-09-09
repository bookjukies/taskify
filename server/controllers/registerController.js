const User = require('../model/User')
const bcrypt = require('bcrypt')


const HandleNewUser = async (req, res) =>{
    const user = req.body.username
    const pwd = req.body.password
    const role = req.body.role

    //checing if the username and password are set
    if(!user || !pwd || !role) return res.status(400).json({'message': 'Username and Password are required'})

    // checking if the user existes in the database
    const duplicate = await User.findOne({username: user}).exec()
    //if the user exists the rest of the code will not executes

    if(duplicate) return res.sendStatus(409)
    try {
        //hasing the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //creating user and storing user in db
        const results = await User.create({
            "username":user,
            "password":hashedPwd,
            "role": role
        })
        console.log(results)
        res.status(201).json({'success': `New user ${user}`})
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = HandleNewUser