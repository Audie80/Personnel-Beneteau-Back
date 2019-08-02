{
    // Variables
    let employeesTable = document.querySelector("#employees")
    let employeesList = []
    let indexEmployeeSelected = null
    let employeeSelected = null

    // Récupération des données de l'API
    let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Content-type', 'application/json');

    let myInit = {
        headers: myHeaders,
        mode: 'cors'
    };

    fetch('http://localhost:3000/api/employees', myInit).then(function (response) {
        response.json().then(function (result) {
            employeesList = result;
            console.log(employeesList);
            reloadEmployees();
        });
    });

    // Ajout des employés au tableau
    let addEmployee = (employee) => {

        let row = `
        <tr role="row" id="employee-`+ employee.ID_EMPLOYEE + `">
        <td>`+ employee.LastName + `</td>
        <td>`+ employee.FirstName + `</td>
        <td>`+ employee.BirthDate + `</td>
        </tr>`;

        if (employeesList.length === 0) {

            employeesTable.innerHTML = row;
        } else {
            employeesTable.innerHTML += row;
        }
    }

    // Remplissage du tableau d'employés
    reloadEmployees = () => {

        //Ménage de la zone
        employeesTable.innerHTML = '';

        //On ajoute un message si pas d'employés
        if (employeesList.length === 0) {
            employeesTable.innerHTML += `
            <tr role="row">
            <td colspan="6"><center>Aucun employé dans la base</center></td>
            </tr>`;
        } else {

            for (let i = 0; i < employeesList.length; i++) {
                addEmployee(employeesList[i])
            }

            let editEmployee = document.querySelectorAll(".editEmployee")
            Array.from(editEmployee).forEach((element) => {
                element.addEventListener('click', (event) => {
                    modifFormEdit(element)
                });
            });

            let deleteEmployee = document.querySelectorAll(".deleteEmployee")
            Array.from(deleteEmployee).forEach((element) => {
                element.addEventListener('click', (event) => {
                    removeEmployee(element)
                });
            });

            let EmployeeLink = document.querySelectorAll(".EmployeeLink")
            Array.from(EmployeeLink).forEach((element) => {
                element.addEventListener('click', (event) => {
                    goToEmployeePage(element)
                });
            });
        }
    }

    
}