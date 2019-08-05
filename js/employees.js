{
    // Variables
    let employeesTable = document.querySelector("#employees")
    let employeesList = []


    //Raz
    sessionStorage.setItem('idEmployee', null);


    // Remplissage du tableau d'employés
    reloadEmployees = () => {

        //Ménage de la zone
        employeesTable.innerHTML = '';

        //On ajoute un message si pas d'employés
        if (employeesList.length === 0) {
            employeesTable.innerHTML += `
            <tr role="row">
            <td colspan="5"><center>Aucun employé dans la base</center></td>
            </tr>`;
        } else {

            for (let i = 0; i < employeesList.length; i++) {
                addEmployee(employeesList[i])
            }

            let editEmployee = document.querySelectorAll(".editEmployee")
            Array.from(editEmployee).forEach((element) => {
                element.addEventListener('click', (event) => {
                    goToFormEdit(element)
                });
            });

            let deleteEmployee = document.querySelectorAll(".deleteEmployee")
            Array.from(deleteEmployee).forEach((element) => {
                element.addEventListener('click', (event) => {
                    removeEmployee(element)
                });
            });

            let employeeLink = document.querySelectorAll(".employeeLink")
            Array.from(employeeLink).forEach((element) => {
                element.addEventListener('click', (event) => {
                    goToEmployeePage(element)
                });
            });
        }
    }


    // Ajout des employés au tableau
    let addEmployee = (employee) => {

        let row = `
        <tr role="row" id="employee-`+ employee.ID_EMPLOYEE + `">
        <td><span class="employeeLink" style="cursor:pointer">`+ employee.LastName + `</span></td>
        <td><span class="employeeLink" style="cursor:pointer">`+ employee.FirstName + `</span></td>
        <td><span class="employeeLink" style="cursor:pointer">`+ employee.BirthDate + `</span></td>
        <td><span class="editEmployee" style="cursor:pointer">Modifier</span></td>
        <td><span class="deleteEmployee" style="cursor:pointer">Supprimer</span></td>
        </tr>`;

        if (employeesList.length === 0) {

            employeesTable.innerHTML = row;
        } else {
            employeesTable.innerHTML += row;
        }
    }


    //Déclaration de la méthode goToFormEdit qui permet de modifier un employé
    goToFormEdit = (element) => {
        //Récupération de l'id de l'employé et enregistrement dans le sessionStorage
        idEmployee = element.parentNode.parentNode.id.split("-")[1]
        console.log(idEmployee);
        sessionStorage.setItem('idEmployee', idEmployee);

        //On fait un redirect sur la page du formulaire employé
        document.location = './crud-employee.php'
    }


    //Déclaration de la méthode removeEmployee qui permet de supprimer un employé
    removeEmployee = (element) => {
        if (confirm("Voulez-vous réellement supprimer ce personnel ?")) {
            //Récupération de l'id de l'employé
            idEmployee = element.parentNode.parentNode.id.split("-")[1]
            console.log(idEmployee);

            //Fetch de suppression de l'employé selon son id

            //On reload le tableau pour qu'il affiche la modification
            reloadEmployees()
        }
    }


    //Déclaration de la méthode qui permet d'aller sur la page de l'employé
    goToEmployeePage = (element) => {
        console.log('test')
        //Récupération de l'id de l'employé et enregistrement dans le sessionStorage
        idEmployee = element.parentNode.parentNode.id.split("-")[1]
        console.log(idEmployee);
        sessionStorage.setItem('idEmployee', idEmployee);
        //On fait un redirect sur la page employé
        document.location = './employee.php'
    }


    // Récupération des données de l'API - Liste des employés
    let url = baseUrl + 'employees';
    fetch(url, myInit).then(function (response) {
        response.json().then(function (result) {
            employeesList = result;
            console.log(employeesList);
            reloadEmployees();
        });
    });

}