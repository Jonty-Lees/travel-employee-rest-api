const express = require ('express');
const { Employee } = require ('../models/employee');
const router = express.Router()


// Set current Employees [GET] -> /api/employee

router.get('/employee', async function (req, res){
    
    const employees = await Employee.find();
    return res.json(employees)
})

// Create new Employees [POST] -> /api/employee/:id

    // route
router.post('/employee', async function (req, res){
    // create new data const
    const employee = new Employee({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        employeeNumber:req.body.employeeNumber,
        designationKey: req.body.designationKeys,
    })
    // save data 
    await employee.save()
    // send data
    res.send(employee)

    })
    
// Search for specific Employees [GET] -> /api/employee/:id
// similar to find all, add :id at end of route

router.get('/employee/:id', async function (req, res){

    // make sure its findOne and search for _id using params
    
    const employees = await Employee.findOne({_id: req.params.id});
    return res.json(employees)
})


// Update exisiting Employees [PATCH] -> /api/employee/:id

router.patch('/employee/:id', async function(req,res){
    Employee.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((employee)=>{
        if (!employee){
            res.status(404).send()
        } else {
            res.send(employee)
        }
    })
})


// Delete Employees [DELETE] -> /api/employee/:id

// define route
router.delete('/employee/:id', async function(req,res){
    // try and catch
    try {
        await Employee.deleteOne({_id: req.params.id})
        res.status(204).send();
    } catch {
        res.status(404).send();
        
    }
})





module.exports = router;
