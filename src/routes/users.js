const router = require("express").Router();
const {
  loginUser,
  registerUser,
  renderSignin,
  renderSignup 
} = require('../app/controllers/users.controller')

router.get("/signup", renderSignup);
router.post("/signup", registerUser);

router.get("/signin", renderSignin);
router.post("/signin", loginUser);

module.exports = router;
