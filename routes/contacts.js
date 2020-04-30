const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

// Models
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route    GET api/contacts
// @desc     Get all users contacts
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route    POST api/contacts
// @desc     Add new contacct
// @access   Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      return res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Server Error" });
    }
  }
);

// @route    PUT api/contacts
// @desc     Update contact
// @access   Private
router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

// @route    Delete api/contacts
// @desc     Delete contact
// @access   Private
router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
