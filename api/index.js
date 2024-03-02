const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyPaser.urlencoded({extended: false}));
app.use(bodyPaser.json());

mongoose
  .connect(
    'mongodb+srv://siddhantkeshari76:siddhant@cluster0.vkvthja.mongodb.net/',
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error Connecting to MongoDB', error);
  });

//Import the models
const Employee = require('../api/models/employee');
const Attendance = require('../api/models/attendance');

//endpoint to register a employee
app.post('/addEmployee', async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    //create a new employee
    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });

    await newEmployee.save();
    res
      .status(201)
      .json({message: 'Employees Saved Successfully', Employee: newEmployee});
  } catch (error) {
    console.log('Error in creating employee', error);
    res.status(500).json({message: 'Failed to add an employee'});
  }
});

//Endpoint to get the employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(201).json(employees);
  } catch (err) {
    res.status(500).json({message: 'Failed to get an employee'});
  }
});

app.get('/', (req, res) => {
  console.log('hello');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
