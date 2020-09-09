const router = require("express").Router();
const {
  loginUser,
  logoutUser,
  registerUser,
  renderSignin,
  renderSignup 
} = require('../app/controllers/users.controller')

router.get("/signup", renderSignup);
router.post("/signup", registerUser);

router.get("/signin", renderSignin);
router.post("/signin", loginUser);

router.get("/logout", logoutUser);

module.exports = router;
