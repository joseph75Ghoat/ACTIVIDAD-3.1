function validateEmail(){
    // recoge el valor de entrada
    var emailField = document.getElementById('user-email');
    // Definir las expresiones regulares a utilizar 
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;// expresiones regulares 
    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
        alert('Email es valido, continua experimentando ');
        return true;
    }else{
        alert('Email no es valido, revisalo y avanza');
        return false;
    }
}

window.addEventListener('load', init, false);
function init() {
    let div = document.querySelector('#ocultar-y-mostrar');//recibe el id del div
    div.style.visibility = 'visible';// le da el parametro de visible 
    let boton = document.querySelector('#ocultar-mostrar');// el boton recibe el id del boton 
    boton.addEventListener('click', function (e) {// se le agrega un evento al dar click 
        if (div.style.visibility === 'visible') {// si el evento esta en visible, entonces lo oculta 
            div.style.visibility = 'hidden';
        } else {
            div.style.visibility = 'visible';
        }
    }, false);
}