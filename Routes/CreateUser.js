const express = require("express");
const router = express.Router();
const user = require("../models/user");
const jwt=require("jsonwebtoken")
const jwtSecret= "Mynameiskhan"

router.post("/createuser", async (req, res) => {
  try {
    await user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      mobileNumber: req.body.mobileNumber,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

router.post("/loginuser", async (req, res) => {
  let email = req.body.email;
  try {
    // Fixed: Pass an object with email field to findOne
    let userData = await user.findOne({ email: email });
    
    if (!userData) {
      return res
        .status(400)
        .json({ error: "Try logging again or Incorrect Password" });
    }
    
    // Fixed: Corrected password comparison logic
    if (req.body.password !== userData.password) {
      return res
        .status(400)
        .json({ error: "Try logging again or Incorrect Password" });
    }

    const data= {
        user:{
            id:userData.id
        }
    }
    
    const authToken = jwt.sign(data,jwtSecret)
    return res.json({ success: true , authToken:authToken});
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;