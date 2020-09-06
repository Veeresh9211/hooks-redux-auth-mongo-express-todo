const express = require('express');
const bcrypt = require('bcrypt');
const routes = express.Router();
const jwt = require('jsonwebtoken');
const ObjectID = require('mongoose').Types.ObjectId;
const auth = require('../Middleware/auth');
let {User} = require('../Models/user');


routes.post('/register', async (req,res)=>{
    const {email, password, confirmPassword, firstName} = req.body;

    if(!email || !password || !confirmPassword || !firstName) return res.status(400).json({msg:"Fill in all the fields!!"});

    if(password.length < 7) return res.status(400).json({msg: "Password must be minimum 7 characters!!"});

    if(password !== confirmPassword) return res.status(400).json({msg: "Password and Confirm Password don't match!!"});

    const existingUser = await User.findOne({email: email})
    if(existingUser) return res.status(400).json({msg: "An account with this email already exists!!"});

    const salt = await bcrypt.genSalt(10);
    const passwordhash = await bcrypt.hash(password, salt);

    let newUser = new User({
        email: email,
        password: passwordhash,
        firstName: firstName
    });

    newUser.save().then((res1,err)=>{
            if (err) return res.status(500).send(err);
            if(!err) return res.status(200).json({
                msg: "Successfully Registered. Please Sign In!!",
                user: res1
            });
    })
    
    // bcrypt.hash(password, 10, function(err, hash) {
    //     console.log("ff"+hash)
    //     console.log(err);
    // });
})

routes.post('/login', async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.status(400).json({msg: "Enter all the fields"});

    const user = await User.findOne({email:email});
    if(!user) return res.status(400).json({msg:"No account exists with this email"});

    let passwordSame = await bcrypt.compare(password, user.password)
    
    if(!passwordSame) return res.status(400).json({msg: "Invalid credentials"});
    
    const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN, { expiresIn: '1800s' });

    res.status(200).json({
        token: token,
        user:{
            id: user._id,
            email: user.email,
            firstName: user.firstName
        }
    })
    
})

routes.get('/verifyToken',auth, async (req,res)=>{
    const user = await User.findOne({_id:req.user_id});
    if(!user) return res.status(400).json({msg:"No account exists with this email"});
    res.status(200).json({
        token: req.header('Authorization'),
        user:{
            id: user._id,
            email: user.email,
            firstName: user.firstName
        }
    })
})

// routes.delete('/delete',auth,(req,res)=>{
//     res.status(200).json({id: req.user_id});
// })

// routes.get('/:id',auth,async (req,res)=>{
//     if(!ObjectID.isValid(req.params.id)){
//         return res.status(400).send(`No record with id: ${req.params.id}`)
//     }

//     const user = await User.findOne({_id:req.params.id});
//     if(!user) return res.status(400).json({msg:"No account exists with this email"});
//     res.status(200).json({user: user});

// })

// routes.put('/:id',auth,async (req,res)=>{
//     if(!ObjectID.isValid(req.params.id)){
//         return res.status(400).send(`No record with id: ${req.params.id}`)
//     }

//     const user = await User.findOne({_id:req.params.id});
//     if(!user) return res.status(400).json({msg:"No account exists with this email"});

  
//     user.updateOne({
//         email: req.body.email,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         gender: req.body.gender,
//         age: req.body.age,
//     }).then((res1,err)=>{
//             if (err) return res.status(500).send(err);
//             if(!err) return res.status(200).json({
//                 msg: "Successfully Updated!!",
//                 user: res1
//             });
//     })

// })
module.exports = routes;