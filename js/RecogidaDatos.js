var Recoger = { //Esta clase trata todos los datos del documento para validarlos
    user: null,
    pass: null,
    patterUser: /^[A-Za-z]{3,20}$/,
    patterPass: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,


    iniciar: function(){
        document.getElementById("botonEntrar").addEventListener("click", ()=>{
        this.patronesInicioSesion();
        });
        document.getElementById("inputUsuario").addEventListener("keyup", (e)=> {
            console.log("Key up escuchado");
            Animacion.limpiarAlertaRoja("alertaInicio","alertaInicioTexto");
        });
    },

    patronesInicioSesion: function(){
        Recoger.user= document.getElementById("inputUsuario").value;
        Recoger.pass= document.getElementById("contraseña").value;
       
        if (Recoger.patterUser.test(Recoger.user)) {
            console.log("patron usuario correcto " + Recoger.user);
            if(Recoger.patterPass.test(Recoger.pass)){
                console.log("patron usuario correcto " + Recoger.pass);
            }else{
                console.log("ERROR: Patron de password incorrecto " + Recoger.pass);
                Animacion.alertaRoja("alertaInicio","alertaInicioTexto","La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.");
            }
        }else{
            console.log("ERROR: Patron de nombre incorrecto " + Recoger.user);
            Animacion.alertaRoja("alertaInicio","alertaInicioTexto","El nombre no es correcto, solo se admiten digitos alfabeticos.")
        }

    }

}