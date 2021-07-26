if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
require('dotenv').config();

var con;
function ingresar(){
    if (document.form.password.value=='12345' && document.form.user.value=='Angel'){ 
        if (process.env.host != null || process !='') {
            location.href='./index3.html';
        } else{
            document.form.submit(); 
        }
   
    } 
    else{ 
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
    } 

}   

function sendParams() {
    con = require('./connect');
    localStorage.setItem('con', con);
   

}

function addData() {
 
    con = require('./connect');
   
    const id = 0;
    const nombre = document.getElementById('nombre').value;
    const ap_pat = document.getElementById('ap_pat').value;
    const ap_mat = document.getElementById('ap_mat').value;
    const edad = document.getElementById('edad').value;

     $query = `INSERT INTO persona (id, nombre, ap_pat, ap_mat, edad) VALUES ( "${id}","${nombre}","${ap_pat}","${ap_mat}","${edad}")`;

    con.query($query, function (err, rows, fields) {

        if (err) {
            console.log('Error Query');
            console.log(err);
            return;
        }
        console.log("Query exitoso", rows);
        //alert(rows);
    });
    
    // con.end(function () {
    //     // Conexión Finalizada 
    // });
    mostrarTabla();
    // Input data conection database
}

function mostrarTabla(){
    $query = 'select * from persona';
    con.query($query, function (err, rows, fields) {
        if (err) {
            console.log('Error Query');
            console.log(err);
            alert(err);
            return;
        }
        let html='',entradas="<tr><td>id</td> <td>Nombre</td> <td>Apellido Paterno</td> <td>Apellido Materno</td> <td>Edad</td></tr>";
        rows.forEach(function(element){
            html+="<tr><td>"+element.id+"</td> <td>"+element.nombre+"</td> <td>"+element.ap_pat+"</td> <td>"+element.ap_mat+"</td> <td>"+element.edad+"</td></tr>"; 
        });
        document.getElementById('table').innerHTML = entradas;
        document.getElementById('table').innerHTML+=html;
    });
}