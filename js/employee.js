{
    //Récupération de l'id
    let idEmployeeSelected = sessionStorage.getItem('idEmployee');

    
    // Variables
    let nameInfo = document.querySelector("#nameInfo");
    let birthDateInfo = document.querySelector("#birthDateInfo");
    let dateRow = document.querySelector("#dateRow");
    let employeeSelected = [];
    let employeeLeaves = [];
    let idLeaveSelected;


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
        dateRow.innerHTML = '';

        //On ajoute un message si pas de congés
        if (employeeLeaves.length === 0) {
            dateRow.innerHTML += `<td colspan="10">Aucun congé posé</td>`;

        } else {
            // Ajout des cellules date
            addCells();
            
            // Mise en couleur des cellules congés
            for (let i = 0; i < employeeLeaves.length; i++) {
                colorLeave(employeeLeaves[i])
            }

            // Ouverture de la pop-up de modification
            let leavePopup = document.querySelectorAll(".tdDate")
            Array.from(leavePopup).forEach((element) => {
                element.addEventListener('click', (event) => {
                    popUp(element)
                });
            });
        }
    };


    // Ajout des cellules au tableau
    let addCells = () => {
        let idCell;

        // Janvier
        for (let i = 1 ; i <= 31 ; i++) {
            if (i < 10) {
                idCell = 'td_2019-01-0' + i;
            } else {
                idCell = 'td_2019-01-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Février
        for (let i = 1; i <= 28; i++) {
            if (i < 10) {
                idCell = 'td_2019-02-0' + i;
            } else {
                idCell = 'td_2019-02-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Mars
        for (let i = 1; i <= 31; i++) {
            if (i < 10) {
                idCell = 'td_2019-03-0' + i;
            } else {
                idCell = 'td_2019-03-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Avril
        for (let i = 1; i <= 30; i++) {
            if (i < 10) {
                idCell = 'td_2019-04-0' + i;
            } else {
                idCell = 'td_2019-04-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Mai
        for (let i = 1; i <= 31; i++) {
            if (i < 10) {
                idCell = 'td_2019-05-0' + i;
            } else {
                idCell = 'td_2019-05-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Juin
        for (let i = 1; i <= 30; i++) {
            if (i < 10) {
                idCell = 'td_2019-06-0' + i;
            } else {
                idCell = 'td_2019-06-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }
        
        // Juillet
        for (let i = 1; i <= 31; i++) {
            if (i < 10) {
                idCell = 'td_2019-07-0' + i;
            } else {
                idCell = 'td_2019-07-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Août
        for (let i = 1; i <= 31; i++) {
            if (i < 10) {
                idCell = 'td_2019-08-0' + i;
            } else {
                idCell = 'td_2019-08-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Septembre
        for (let i = 1; i <= 30; i++) {
            if (i < 10) {
                idCell = 'td_2019-09-0' + i;
            } else {
                idCell = 'td_2019-09-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Octobre
        for (let i = 1; i <= 31; i++) {
            if (i < 10) {
                idCell = 'td_2019-10-0' + i;
            } else {
                idCell = 'td_2019-10-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Novembre
        for (let i = 1; i <= 30; i++) {
            if (i < 10) {
                idCell = 'td_2019-11-0' + i;
            } else {
                idCell = 'td_2019-11-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }

        // Décembre
        for (let i = 1; i <= 31; i++) {
            if (i < 10) {
                idCell = 'td_2019-12-0' + i;
            } else {
                idCell = 'td_2019-12-' + i;
            }
            let cell = `<td class="tdDate" id="` + idCell + `" style="cursor:pointer"></td>`;
            dateRow.innerHTML += cell;
        }
    }


    // Mise en couleur des congés
    let colorLeave = (leave) => {

        // Ajouter une méthode qui regarde si la date est incluse dans les congés, si oui colorer la td
        let tdDate = document.querySelectorAll(".tdDate");
        let idTdDate;
        for (let i = 0; i < tdDate.length; i++) {
            // On récupère la date dans l'ID pour pouvoir la comparer avec les dates de congés
            idTdDate = tdDate[i].id.split("_")[1];
            if (idTdDate >= leave.BeginningDate && idTdDate <= leave.EndingDate) {
                tdDate[i].style.backgroundColor = 'green';

                // On récupère l'ID_LEAVE et on l'ajoute en tant que class
                tdDate[i].classList.add(leave.ID_LEAVE);
            }
        }
    }


    //Déclaration de la méthode qui ouvre la pop-up de modification
    popUp = (element) => {
        // Récupérer l'ID_LEAVE, le stocker dans le sessionStorage, ouvrir la popup, remplir les champs
        idLeaveSelected = element.classList[1];
        sessionStorage.setItem('idLeaveSelected', idLeaveSelected);
        console.log('idLeaveSelected' + idLeaveSelected)
        document.getElementById("formLeave").style.display = "none";
    }


    // Récupération des données de l'API - Congés de l'employé sélectionné
    let getLeaves = function () {
        myInit.method = 'GET';
        let urlGet = baseUrl + 'employees/' + idEmployeeSelected + '/leaves';
        fetch(urlGet, myInit).then(function (response) {
            response.json().then(function (result) {
                employeeLeaves = result;
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