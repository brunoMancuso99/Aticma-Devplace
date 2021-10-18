(function validarForm(formulario){
    var formulario = document.getElementsByName('formulario')[0],
    elementos= formulario.elements,
    boton=getElementsByidId('btn'); 

    // comprobar que no este vacio
    var  validarNombre = function(e){

            if (formulario.name.value == 0){
                    alert('complete el campo nombre');
                    e.preventDefault();
            }
    }

    var  validarProvincia = function(e){

            if (formulario.provincia.value == 0){
                    alert('complete el campo provincia');
                    e.preventDefault();
            }
    }

    var  validarEmail = function(e){

            

            if (formulario.Email.value == 0){
                    alert('complete el campo email');
                    e.preventDefault();
            }

    }

    // comprovar que el email tenga formato valido
    var comEmail = function(e) {
            
            var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            var esValido=expReg.test(Email);

    if (esValido==false) {
            alert('el correo Email no es valido');
            
    } 
}


    var  validarcContacto = function(e){

            if (formulario.contacto.value == 0){
                    alert('complete el campo contacto');
                    e.preventDefault();
            }
    }

    var validar = function(e) {
            validarNombre(e);
    }

    formulario.addEventListener('submit',validar)
})