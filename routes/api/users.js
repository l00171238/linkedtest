const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
//importing the user schema 
const User = require('../../models/User');

//@route Get api/users
// @desc  for callback testing 'user route'
// @acces  Public     
router.post('/', 
        //creating validation for the body, adding the custom message and the rule for the validation
    [
        check('name', ' Name is required').not().isEmpty(),
        check('email', 'Please enter proper email ').isEmail(),
        check('password','char length must be 6 ').isLength({ min:6 })
    ],
    async (req, res) => {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      }

      //making the work easy by simply creating req.body
      const { name, email, password } = req.body;

      try {
         //see if the user exists
        let user = await User.findOne({ email });
        if (user) {
          res.status(400).json({ errors: [{ msg: "User already exsits" }] });
        }
        
        //get user gravatar 
        const avatar = gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        });

        user = new User({
          name,
          email,
          avatar,
          password
        });
         //encrypt the password
         //create salt to hash password
        const salt = await bcrypt.genSalt(10);
        //encrypting the password with salt value
        user.password = await bcrypt.hash(password, salt);
        //saving the user
        await user.save();
         //return jsonwebtoken
      
        res.send('user registered');
      } catch (err) {
        console.error(err.message);
        res.sendStatus(500).send('Server Error');
      }
  }
);
module.exports = router;