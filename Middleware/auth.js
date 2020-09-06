const jwt = require('jsonwebtoken');

const auth = (req,res,next) =>{
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({msg:"UnAuthorized Access!! Please Sign up/ Sign In."});

    jwt.verify(token,process.env.JWT_TOKEN, (err, verifiedJwt) => {
        if(err){
          res.status(401).json({msg: "Session Expired.Please sign in again!!"});
        }else{
          req.user_id = verifiedJwt.id;
          next();
        }
      })
}

module.exports = auth;