function agregarNumero(numero){
    document.getElementById('resultado').innerHTML+=numero;
    
}

function igual(){
    cadena = document.getElementById('resultado').innerHTML;
    resultado = eval(cadena);
    document.getElementById('resultado').innerHTML = resultado;
}
function borrar(){
    document.getElementById('resultado').innerHTML = "";
}

function acordeon(){
    calve = document.getElementById('resultado').innerHTML;
    if(clave == "666"){
        window.location.assign('acordeon.html');
    }
    
    if (clave = "777"){
        window.location.assign('nuevo.html');
    }
    
}