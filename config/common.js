//Variables globales

let idEmployee = null;


//Configuration des Fetch()
let myHeaders = new Headers();
myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
myHeaders.append('Content-type', 'application/json');

let myInit = {
    headers: myHeaders,
    mode: 'cors'
};

let baseUrl = 'http://localhost:3000/api/';