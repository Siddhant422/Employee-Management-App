const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const moment = require('moment');

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
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({message: 'Failed to get an employee'});
  }
});

app.get('/', (req, res) => {
  console.log('hello');
});

app.post('/attendance', async (req, res) => {
  try {
    const {employeeId, employeeName, date, status} = req.body;
    const existingAttendance = await Attendance.findOne(employeeId, date);
    if (existingAttendance) {
      existingAttendance.status = status;
      await existingAttendance.json.save();
      res.status(200).json(existingAttendance);
    } else {
      const newAttendance = new Attendance({
        employeeId,
        employeeName,
        date,
        status,
      });
      await newAttendance.save();
      res.status(200).json(newAttendance);
    }
  } catch (error) {
    res.status(500).json({message: 'Error Submitting Attendance'});
    console.log('Error in attendance', error);
  }
});

app.get('/attendance', async (req, res) => {
  try {
    const {date} = req.query;
    const attendanceData = await Attendance.find({date: date});
    res.status(200).json(attendanceData);
  } catch (error) {
    res.status(500).json({message: 'Error Submitting'});
    console.log('Error in submitting', error);
  }
});

app.get('/attendance-report-all-employees', async (req, res) => {
  try {
    const {month, year} = req.query;

    console.log('query params:', month, year);
    const startDate = moment(`${year}-${month}-01`, 'YYYY-MM-DD')
      .startOf('month')
      .toDate();
    const endDate = moment(startDate).endOf('month').toDate();
    const report = await Attendance.aggregate([
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: [
                  {
                    $month: {$dateFromString: {dateStrings: '$date'}},
                  },
                  parseInt(req.query.year),
                ],
              },
              {
                $eq: [
                  {$year: {$dateFromString: {dateString: 'date'}}},
                  parseInt(req.query.year),
                ],
              },
            ],
          },
        },
      },
      {
        $group: {
          _id: 'employeeId',
          present: {
            $sum: {
              $cond: {if: {$eq: ['status', 'present']}, then: 1, else: 0},
            },
          },
          absent: {
            $sum: {
              $cond: {if: {$eq: ['$status', 'holiday']}, then: 1, else: 0},
            },
          },
          halfday: {
            $sum: {
              $cond: {if: {$eq: ['$status', 'holiday']}, then: 1, else: 0},
            },
          },
          holiday: {
            $sum: {
              $cond: {if: {$eq: ['$status', 'holiday']}, then: 1, else: 0},
            },
          },
        },
      },
      {
        $lookup: {
          from: 'employess',
          localField: '_id',
          foreignField: 'employeeId',
          as: 'employeeDetails',
        },
      },
      {
        $unwind: '$employeeDetails',
      },
      {
        project: {
          _id: 1,
          present: 1,
          absent: 1,
          halfday: 1,
          name: '$employeeDetails.employeeName',
          designation: '$employeeDetails.designation',
          salary: '$employeeDetails.salary',
          employeeId: '$employeeDetails.employeeId',
        },
      },
      res.statusCode(200).json({report})
    ]);
  } catch (error) {
    res.staus(500).json({message: 'Error fetching Summary report'});
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
