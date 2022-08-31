const { registerUser, loginUser, userData, getUsers,} = require("../controllers/user.controller");
  
const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/userdata", userData);
router.get("/getusers", getUsers);

module.exports = router;