const router = require("express").Router();
const {
  addOne,
  getAll,
  updateOneByID,
  deleteOneByID,
} = require("../controllers/mentor-controller");

router.post("/add", addOne);
router.get("/get", getAll);
router.patch("/:id", updateOneByID);
router.delete("/:id", deleteOneByID);

module.exports = router;
