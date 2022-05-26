const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//create a user using: POST "/api/auth/createuser". not'n requqire authontication
router.post(
  "/createuser",
  [body("name", "Name should be atleast 3 characters").isLength({ min: 3 }), body("email", "Enter a valid email").isEmail(), body("password", "Passowrd must be atleast 5 characters").isLength({ min: 5 })],
  async (req, res) => {
    //if there are errors, returns bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check weather the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry a user with this email already exits" });
      }

      //secure password by bcrypt
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign({ data: data }, "secret", { expiresIn: "1h" });

      res.json({ authtoken });
      // res.json(user);
    } catch (error) {
      //for log in console
      console.error(error.message);
      //for log in response
      res.status(500).send("Some Error Occured");
    }
  }
);
//create a user using: POST "/api/auth/login". requqires authontication
router.post("/login", [body("email", "Enter a valid email").isEmail(), body("password", "Passowrd should not be blank").exists()], async (req, res) => {
  //if there are errors, returns bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    //finding users with email id
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }
    //compare password by bcrypt
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign({ data: data }, "secret", { expiresIn: "1h" });

    res.json({ authtoken });
    // res.json(user);
  } catch (error) {
    //for log in console
    console.error(error.message);
    //for log in response
    res.status(500).send("Internal Sever Error Occured");
  }
});
module.exports = router;
