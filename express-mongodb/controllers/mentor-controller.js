const { mentorModel } = require("../models/mentor-model");

exports.addOne = async (req, res) => {
  try {
    console.log(req.body);
    var post = new mentorModel({
      username: req.body.username,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    });
    await post.save();
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const mentors = await mentorModel.find();
    res.status(200).json(mentors);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving mentors." });
  }
};

exports.updateOneByID = async (req, res) => {
  try {
    const { id } = req.params;
    const query = req.body;
    const mentors = await mentorModel.findByIdAndUpdate(id, query);
    res.status(200).json(mentors);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving mentors." });
  }
};

exports.deleteOneByID = async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await mentorModel.findByIdAndDelete(id);
    res.status(200).json({ id: mentor._id, message: "deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving mentors." });
  }
};
