const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1: Get all the notes using GET:"/api/auth/fetchallnotes. Login required"
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occured");
  }
});

//Route 2: Add a notes using post:"/api/auth/addnote. Login required"
router.post("/addnote", fetchuser, [body("title", "Title should be atleast 3 characters").isLength({ min: 3 }), body("description", "Description should be atleast 5 characters").isLength({ min: 5 })], async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const notes = new Notes({ title, description, tag, user: req.user.id });

    const saveNote = await notes.save();
    res.json(saveNote);
  } catch (error) {
    console.error(error.message);
    //for log in response
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
