const User = require("../db/User");
const bcrypt = require("bcryptjs");
// const BonnieUser = require("../db/BonnieUser");

const Register = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email: email });
    console.log(req.body.name);
    if (userExists) {
      throw new Error(`User ${email} already exists`);
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    console.log(user);
    res.json(user);
  } catch (e) {
    const newError = e;
    res.status(409).send(`${newError}`);
  }
};

module.exports = { Register };
