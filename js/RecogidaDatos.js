var Recoger = { //Esta clase trata todos los datos del documento para validarlos
    user: null,
    pass: null,
    patterUser: /^[A-Za-z]{3,20}$/,
    patterPass: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
    

    iniciar: function(){
        document.getElementById("botonEntrar").addEventListener("click", ()=>{//escuchamos el click para comprobar los datos 
        this.patronesInicioSesion();
        document.getElementById("inputUsuario").value="";
        document.getElementById("contraseña").value="";
        });

        
            document.getElementById("inputUsuario").addEventListener("keyup", ()=>{//Decimos que el eschuche el evento al que le estamos haciendo target o focus, y que ese ejecute el siguiente codigo
                console.log("Key up escuchado");
                Animacion.limpiarAlertaRoja("alertaInicio","alertaInicioTexto");
            });
            document.getElementById("contraseña").addEventListener("keyup", ()=>{//Decimos que el eschuche el evento al que le estamos haciendo target o focus, y que ese ejecute el siguiente codigo
                console.log("Key up escuchado");
                Animacion.limpiarAlertaRoja("alertaInicio","alertaInicioTexto");
            });
    },

    patronesInicioSesion: function(){ //Se encarga de comprobar los datos del formulario 
        Recoger.user= this.recoger('inputUsuario');//Recogemos los datos de usuario y contraseña
        Recoger.pass=  this.recoger('contraseña');
       
        if (Recoger.patterUser.test(Recoger.user)) {//Si pasa el test el nombre pasamos al siguiente
            console.log("patron usuario correcto " + Recoger.user);
            if(Recoger.patterPass.test(Recoger.pass)){//Si pasa el test la contraseña, entonces vamos comprobar su existencia
                console.log("patron usuario correcto " + Recoger.pass);
        
                if (Usuarios.comprobar(Recoger.user,Recoger.pass)==true) {//El metodo retorna true si existe y false si no existe y recibe usuario y contraseña
                    console.log("El usuario se encuentra almacenado en la base de datos");
                    window.sessionStorage.setItem("nombre", Recoger.user);
                    window.sessionStorage.setItem("pass", Recoger.pass);
                    location.href="html/acciones.html";
                    
                }else{
                    console.log("el usuaario no esta almacenado en la base de datos");
                    Animacion.alertaRoja("alertaInicio","alertaInicioTexto","El usuario no esta almacenado en la base de datos");
                }

            }else{
                console.log("ERROR: Patron de password incorrecto " + Recoger.pass);//Si el patron no es correcto PA' TU CASAAAAAAA
                Animacion.alertaRoja("alertaInicio","alertaInicioTexto","La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.");//funcion que
                //muestra la alerta
            }
        }else{
            console.log("ERROR: Patron de nombre incorrecto " + Recoger.user);//Si el patron no es correcto PA'TU CASAAAAAAA!!!! x2 PRINGAOOOOOOO!!!!
            Animacion.alertaRoja("alertaInicio","alertaInicioTexto","El nombre no es correcto, solo se admiten digitos alfabeticos.")//funcion que muestra la alerta en caso de error
        }

    },
    recoger: function(idARecoger){
        var a = document.getElementById(`${idARecoger}`).value;
        return a;
    },

    controlMatricula: function(datos){
        patronActuales= /^[0-9]{4}[a-zA-Z]{3}$/;

        if (patronActuales.test(datos)) {
            return true;
        }else{
            return false
        }
    },
    controlTextos(datos){
        patron= /^[a-zA-Z]{2,15}$/;

        if (patron.test(datos)) {
            return true;
        }else{
            return false
        }
    },
    

    existenciaDeCoches: function(matricula){
        var coches = Acciones.coches;
        
        if (coches.length==0) {
            return false;
        }else{
            for(var i=0 ; i<coches.length; i++){
                if (matricula==coche[i].matricula) {
                
                        i=this.usuario.length;
                        return true;
            
                }
                if (i==coche.length-1) {
                    return false
                }
            }

        }
    },
    existenciaEnGaraje: function(matricula){
        var garaje = Acciones.garaje;
        
        if (garaje.length==0) {
            return false;
        }else{
            for(var i=0 ; i<garaje.length; i++){
                if (matricula==garaje[i].matricula) {
                
                        i=this.usuario.length;
                        return true;
            
                }
                if (i==garaje.length-1) {
                    return false
                }
            }

        }
    }




}