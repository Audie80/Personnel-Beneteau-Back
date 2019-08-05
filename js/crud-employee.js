{
    //Récupération de l'id
    let idEmployee = sessionStorage.getItem('idEmployee');

    let employeeSelected = [];

    // Récupération des données de l'API - Infos de l'employé sélectionné
    let url = baseUrl + 'employees/' + idEmployee
    fetch(url, myInit).then(function (response) {
        response.json().then(function (result) {
            employeeSelected = result;
            console.log(employeeSelected);
        });
    });
}