const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
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
    (req, res) => {
         const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
res.send('user route')
});
module.exports = router;