const studentModel = require("../models/studentSchema");
class StudentController {
  static createDoc = async (req, res) => {
    try {
      const { name, age, fees } = req.body;
      const doc = new studentModel({
        name: name,
        age: age,
        fees: fees,
      });
      const result = await doc.save();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
    res.redirect("/student");
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      // console.log(result);
      res.render("student", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static editDoc = async (req, res) => {
    // console.log(req.params.id);
    try {
      const result = await studentModel.findById(req.params.id);
      console.log(result);
      res.render("edit", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static updateDocById = async (req, res) => {
    try {
      const { name, age, fees } = req.body;
      // console.log(name, age, fees);
      const result = await studentModel.findByIdAndUpdate(req.params.id, {
        name,
        age,
        fees,
      });
      res.redirect("/student");
    } catch (err) {
      console.log(err);
    }
    // res.redirect("/student");
  };
  static deleteeDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndDelete(req.params.id);
      res.redirect("/student");
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = StudentController;
