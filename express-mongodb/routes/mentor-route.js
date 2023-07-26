const router = require("express").Router();
const {
  addOne,
  getAll,
  updateOneByID,
  deleteOneByID,
  deleteManyByFilter,
} = require("../controllers/mentor-controller");

router.post("/add", addOne);
router.get("/get", getAll);
router.patch("/:id", updateOneByID);
router.delete("/deleteMany", deleteManyByFilter);
router.delete("/:id", deleteOneByID);

module.exports = router;
