const pool = require("../config");

class Model {
  static async getUser(email) {
    try {
      let findUser = await pool.query(
        `SELECT user_id, Semail, password FROM user WHERE email = '${email}'`
      );
      return findUser;
    } catch (err) {
      return false;
    }
  }
}

module.exports = Model;
