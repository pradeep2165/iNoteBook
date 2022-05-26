const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");

//create a user using: POST "/api/auth/". not'n requqire authontication
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
      user = await User.create({
        name: req.bohdy.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } catch (error) {
      //for log in console
      console.error(error.message);
      //for log in response
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
