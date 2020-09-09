import passport from "passport";
import User from "../models/User";

const userController = {};

userController.renderSignin = (req, res) => {
  req.isUnauthenticated() ? res.render("users/signin") : res.redirect("/account/main");
};

userController.renderSignup = (req, res) => {
  req.isUnauthenticated() ? res.render("users/signup") : res.redirect("/account/main");
};

userController.registerUser = async (req, res) => {
  const doc = req.body;
  const emailExisting = await User.findOne({email: doc.email})
  const errors = [];

  if (!doc.username || !doc.email || !doc.password) errors.push(1);
  if (doc.password !== doc.confirm_password) errors.push(1);
  if (emailExisting) errors.push(1)

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
};

userController.loginUser = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/account/main",
});

export default userController
export const {loginUser, registerUser, renderSignin, renderSignup} = userController
