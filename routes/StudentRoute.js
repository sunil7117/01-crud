const express = require("express");
const route = express.Router();
const StudentController = require("../controller/studentController");
route.get("/student", StudentController.getAllDoc);
route.post("/student", StudentController.createDoc);
route.get("/student/edit/:id", StudentController.editDoc);
route.post("/student/update/:id", StudentController.updateDocById);
route.post("/student/delete/:id", StudentController.deleteeDocById);
module.exports = route;
