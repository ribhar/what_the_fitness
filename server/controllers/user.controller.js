const User=require("../models/user.model");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const saltRounds = 12;

const passwordRegex = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])(?=.{8,})"
);


// User register function
module.exports.registerUser=async(req,res,next)=>{

    const {first_name,last_name,email,mobile,password,role,status}=req.body;
  
    if(!first_name || !last_name || !email || !mobile || !password || !role || !status){
      return res.status(501).json({message: "All fields are mandatory"});
    }
  
    checkMobile=await User.findOne({
      mobile : mobile
    });
  
    checkEmail=await User.findOne({
      email : email
    });
    
    if(checkMobile && checkEmail) {
      return res.status(501)
      .json({ 
          message: "Provided email and moble number already registered"
      });
    }else if(checkMobile){
  
      return res.status(501)
      .json({ 
          message: "Provided mobile number already registered" 
      });
  
    }else if(checkEmail){
  
      return res.status(501)
      .json({ 
          message: "Provided email already registered" 
      });
  
    }else{
      if(
          mobile.toString()
         .length===10){
  
        if(password.match(passwordRegex)){
  
          const hashPassword=await bcrypt.hash(password,saltRounds);
  
          await User.create({
              ...req.body,
              password : hashPassword
          })
          .then(() => {
  
              return res.status(200)
                .json({ 
                  message: "Account successfully created" 
              });
  
          })
          .catch((err)=>{
  
              return res.status(501).send(err);
  
          });
        }else{
  
          return res.status(501).json({
            message: "Provided password must include at least one lowercase character, one uppercase character, one special character and must have minimum 8 characters",
          });
  
        }
      }else{
        return res.status(501)
          .json({ 
              message: "Provided mobile number is not valid" 
          });
      }
    }
  };

// User Login function
module.exports.loginUser=async(req,res,next)=>{

  const {email,password,role}=req.body;

  if(!email||!password){

    return res.status(501)
      .json({ 
        message: "All fields are mandatory" 
    });

  }

  let user=await User.findOne({email});

  if(!user){

    return res.status(501)
    .json({ 
        error: "Error" 
    });

  } 
  else{
    if(user.role===role){

      await bcrypt.compare(password,user.password)
        .then((r)=>{
          if(r){

            let token=jwt.sign(
              {id: user._id, email: user.email},
              process.env.JWT_SECRET,
              {expiresIn: "30 days"}
            );

            return res.json({

              status: 200, message: "Logged in successfully", data: user, token

            });

          }else{

            return res.status(501)
            .send("Invalid Password");

          }
        })
        .catch((err)=>{

          return res.status(501)
          .next(err);

        });

    }else{

      return res.status(501)
      .send("Seems you choosed incorrect role");

    }
  }
};


// User function, to get users data
module.exports.userData=async(req,res,next)=>{

  const {token}=req.body;

  try{
    let decodedToken = jwt.decode(token, process.env.JWT_SECRET);

    let user=await User.findOne({ _id: decodedToken.id });

    if(user){

      return res.status(200)
      .json(user);

    }else{

      return res.status(501)
        .json({message: "User not found"});

    }
  }catch(error){

    return res.status(401)
    .json({message: "Session timeout"});

  }
};


// Function to get all users
module.exports.getAllUsers=async(req,res,next)=>{

  const {name,email,mobile,status,role}=req.query;

  let user=await User.find({$or:[{first_name:name},{email},{mobile},{status},{role}]});

  if(user){

    return res.status(200)
    .json(user);

  }else{

    return res.status(501)
    .json({message:"User not found"});

  }
};
