const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJwT = (req, res, next) =>{
    const authHeader = req.headers.authorization

    if(!authHeader) return res.sendStatus(401)

    const token = authHeader.split(' ')[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded)=>{
            if(err) return res.sendStatus(403);
            //decoded username
            req.user = decoded.username;
            //exeriment to carry cart data over to the front-end
            req.cart = decoded.cart;
            // console.log(decoded);
            next()
        }
    )
}

module.exports = verifyJwT