const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const Model = require("../models");

class Controller {
  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let findUser = await Model.getUser(email);

      if (!findUser) throw { message: "Invalid Email/Password" };

      let checkPass = await comparePassword(password, findUser.password);

      if (!checkPass) throw { message: "Invalid Email/Password" };

      let token = await generateToken({
        user_id: findUser.user_id,
        email: findUser.email,
      });

      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
