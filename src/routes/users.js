const router = require("express").Router();
const passport = require("passport");
const User = require("../models/User");

router.get("/signup", (req, res) => {
  req.isUnauthenticated() ? res.render("users/signup") : res.redirect("/crud");
});

router.post("/signup", async (req, res) => {
  const doc = req.body;
  const errors = [];

  if (!doc.username || !doc.email || !doc.password) errors.push(1);
  if (doc.password !== doc.confirm_password) errors.push(1);

  if (errors.length > 0) {
    res.render("users/signup", { username: doc.username, email: doc.email });
  } else {
    const userRegister = new User({
      username: doc.username,
      email: doc.email,
      password: doc.password,
    });
    await userRegister.save();
    res.redirect("/users/signin");
  }
});

router.get("/signin", (req, res) => {
  req.isUnauthenticated() ? res.render("users/signin") : res.redirect("/crud");
});

router.post(
  "/signin",
  passport.authenticate("local", {
    failureRedirect: "/users/signin",
  }),
  (req, res) => {
    res.redirect("/crud");
  }
);

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/users/signin");
});

module.exports = router;
