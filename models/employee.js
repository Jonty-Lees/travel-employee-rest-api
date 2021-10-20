const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({

    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    employeeNumber: {
        type: Number,
        unique: true
    },
    designationKey: {
        type: String
    }
})

const Employee = mongoose.model("Employee", EmployeeSchema)

module.exports = { Employee }