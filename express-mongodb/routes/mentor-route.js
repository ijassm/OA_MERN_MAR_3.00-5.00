const router = require("express").Router();
const {
  addOne,
  getAll,
  updateOneByID,
} = require("../controllers/mentor-controller");

router.post("/add", addOne);
router.get("/get", getAll);
router.patch("/:id", updateOneByID);

module.exports = router;
