{
    //Récupération de l'id
    let idEmployeeSelected = sessionStorage.getItem('idEmployee');

    //Variables
    let addEmployeeForm = document.querySelector("#addEmployeeForm");
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let birthdate = document.querySelector("#birthdate");
    let employeeSelected = [];


    //On ajoute au formulaire un évènement submit
    addEmployeeForm.addEventListener("submit", (event) => {

        let employee = {
            FirstName: firstname.value,
            LastName: lastname.value,
            BirthDate: birthdate.value
        };

        if (employee.FirstName !== undefined && employee.LastName !== undefined && employee.BirthDate !== undefined) {

            //Si pas d'employé sélectionné, on est en ajout
            if (idEmployeeSelected === null && employeeSelected === []) {
                //Fetch
                addEmployeeForm.reset();
            } else {

                //Sinon on est en modification
                //Fetch

                //On clean le formulaire et on efface l'id et l'employé sélectionné
                addEmployeeForm.reset();
                sessionStorage.setItem('idEmployee', null);
                idEmployeeSelected = null;
                employeeSelected = [];

                //On redirige

            }
        }
        event.preventDefault();
    });


    //Déclaration de la méthode de modification d'un employé
    let modifFormEdit = () => {
        if (idEmployeeSelected !== null && employeeSelected.length !== 0) {

            //On modifie le titre du formulaire
            titleForm.textContent = "Modification d'un personnel"

            //On remplit les champs
            firstname.value = employeeSelected[0].FirstName;
            lastname.value = employeeSelected[0].LastName;
            birthdate.value = employeeSelected[0].BirthDate;
        }
    }


    //Si on est en modification, Récupération des données de l'API - Infos de l'employé sélectionné
    if (idEmployeeSelected !== null) {
        let url = baseUrl + 'employees/' + idEmployeeSelected;
        fetch(url, myInit).then(function (response) {
            response.json().then(function (result) {
                employeeSelected = result;
                console.log(employeeSelected)
                modifFormEdit();
            });
        });
    };
    
}