module.exports = (app) => {
    const employees = require('../controllers/employees.controller.js');

    // Retrieve all Employees
    app.get('/api/employees', employees.findAll);

    //Create a new Employee
    app.post('/api/employee', employees.create);

    // Retrieve a single Employee with ID_EMPLOYEE
    app.get('/api/employees/:ID_EMPLOYEE', employees.findOne);

    // // Update an Employee with ID_EMPLOYEE
    // app.put('/api/employees/:ID_EMPLOYEE', employees.update);

    // // Delete an Employee with ID_EMPLOYEE
    // app.delete('/api/employees/:ID_EMPLOYEE', employees.delete);

}