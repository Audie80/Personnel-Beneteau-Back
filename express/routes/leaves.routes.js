module.exports = (app) => {
    const leaves = require('../controllers/leaves.controller.js');

    // Retrieve all Leaves from Employees, with employees data
    app.get('/api/leaves', leaves.findAll);

    // Retrieve all Leaves from an Employee
    app.get('/api/employees/:ID_EMPLOYEE/leaves', leaves.findAllByEmployee);

    // Create a new Leave
    app.post('/api/employees/:ID_EMPLOYEE/leave', leaves.create);

    // Retrieve a single Leave with ID_LEAVE
    app.get('/api/employees/:ID_EMPLOYEE/leaves/:ID_LEAVE', leaves.findOne);

    // Update a Leave with ID_LEAVE
    app.put('/api/employees/:ID_EMPLOYEE/leaves/:ID_LEAVE/update', leaves.update);

    // Delete a Leave with ID_LEAVE
    app.delete('/api/employees/:ID_EMPLOYEE/leaves/:ID_LEAVE/delete', leaves.delete);

}