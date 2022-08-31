const { Schema, model } = require("mongoose"); // To create database table

const mongoose = require("mongoose"); // To connect database

const randome = require("random-string-generator"); // To generate unique uid

const { isEmail } = require("validator"); // To validate emails

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new Schema({
  uid: { 
    type: String, 
    default: randome(13, "lower") 
  },

  first_name: { 
    type: String, 
    required: true 
  },

  last_name: { 
    type: String, 
    required: true 
  },

  email: {
    type: String,
    unique: true,
    required: true,
    validate: [
        isEmail, "Invalid email address"
    ],
  },

  mobile: { 
    required: true, 
    type: Number, 
    unique: true 
  },

  password: { 
    type: String, 
    required: true 
  },

  role: { 
    type: String, 
    required: true, 
    enum: [
        "admin", "member", "trainer"
    ] 
  },

  status: { 
    type: String, 
    required: true, 
    enum: [
        "active", "inactive"
    ] 
  },

  
});

const User=model("user",userSchema);

module.exports=User;
