import user from "../models/user.js";
import role from "../models/role.js";

const existingUser = async (req, res, next) => {
  const existingUser = await user.findOne({ email: req.body.email });
  return existingUser
    ? res.status(400).send({ message: "The user is already registered" })
    : next();
};

//Validacion de que el rol que se da en el id sea admin y no user
const existingAdmin = async (req, res, next) => {
  const adminRole = await role.findById(req.body.role);
  if (!adminRole) return res.status(400).send({ message: "Role admin no found" });

  return adminRole.name === "admin"
    ? next()
    : res.status(400).send({ message: "The role is not admin" });
};

export default { existingUser, existingAdmin };