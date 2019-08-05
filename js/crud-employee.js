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
        if (employee.FirstName && employee.LastName && employee.BirthDate) {

            //Si pas d'employé sélectionné, on est en ajout
            if (employeeSelected.length === 0) {

                //Fetch
                Object.defineProperty(myInit, 'method', {
                    value: 'POST'
                });
                Object.defineProperty(myInit, 'body', {
                    value: JSON.stringify(employee)
                });
                let url = baseUrl + 'employee';
                fetch(url, myInit).then(response => response.json())
                    .then(result => console.log('fetch envoyé'));

                //addEmployeeForm.reset();
            } else {
                console.log('test')
                //Sinon on est en modification
                //Fetch

                //On clean le formulaire et on efface l'id et l'employé sélectionné
                addEmployeeForm.reset();
                sessionStorage.setItem('idEmployee', null);
                idEmployeeSelected = null;
                employeeSelected = [];

                //On redirige

            }
        } else {
            alert('Veuillez remplir tous les champs');
        };
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