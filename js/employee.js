{
    //Récupération de l'id
    let idEmployeeSelected = sessionStorage.getItem('idEmployee');

    
    // Variables
    let nameInfo = document.querySelector("#nameInfo");
    let birthDateInfo = document.querySelector("#birthDateInfo");
    let leavesTable = document.querySelector("#leaves");
    let employeeSelected = [];
    let employeeLeaves = [];


    // Remplissage des infos de l'employé
    reloadEmployee = () => {

        if (employeeSelected.length !== 0) {
            nameInfo.innerHTML += employeeSelected[0].FirstName + ' ' + employeeSelected[0].LastName;
            birthDateInfo.innerHTML += 'Date de naissance : ' + employeeSelected[0].BirthDate;
        }
    };


    // Remplissage des congés de l'employé
    reloadLeaves = () => {

        //Ménage de la zone
        leavesTable.innerHTML = '';

        //On ajoute un message si pas de congés
        if (employeeLeaves.length === 0) {
            leavesTable.innerHTML += `
            <tr role="row">
            <td colspan="5"><center>Aucun congé posé</center></td>
            </tr>`;
        } else {

            // Ajout des congés
            for (let i = 0; i < employeeLeaves.length; i++) {
                addLeave(employeeLeaves[i])
            }

            // Ouverture de la pop-up de modification
            let leaveLink = document.querySelectorAll(".leaveLink")
            Array.from(leaveLink).forEach((element) => {
                element.addEventListener('click', (event) => {
                    popUp(element)
                });
            });
        }
    };


    // Ajout des employés au tableau
    let addLeave = (leave) => {

        // Ajouter une méthode qui regarde si la date est incluse dans les congés, si oui colorer la td
        let cell = `
                <td role="cell" id="leave-`+ leave.ID_LEAVE + `" class="leaveLink" style="cursor:pointer">
                    `+ leave.BeginningDate + `
                </td>`;

        if (employeeLeaves.length === 0) {

            leavesTable.innerHTML = cell;
        } else {
            leavesTable.innerHTML += cell;
        }
    }


    //Déclaration de la méthode qui ouvre la pop-up de modification
    popUp = (element) => {
        document.getElementById("formLeave").style.display = "none";
    }


    // Récupération des données de l'API - Congés de l'employé sélectionné
    let getLeaves = function () {
        myInit.method = 'GET';
        let urlGet = baseUrl + 'employees/' + idEmployeeSelected + '/leaves';
        fetch(urlGet, myInit).then(function (response) {
            response.json().then(function (result) {
                employeeLeaves = result;
                console.log(employeeLeaves.length);
                reloadEmployee();
                reloadLeaves();
            });
        });
    }


    // Récupération des données de l'API - Données de l'employé sélectionné
    let getEmployee = function() {
        myInit.method = 'GET';
        let url = baseUrl + 'employees/' + idEmployeeSelected;
        fetch(url, myInit).then(function (response) {
            response.json().then(function (result) {
                employeeSelected = result;
                getLeaves();
            });
        });
    }
    

    // Chargement des données au chargement de la page
    window.onload = getEmployee();
}