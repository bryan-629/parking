document.addEventListener('DOMContentLoaded', function(){
    inicio.iniciarApp();
    
},false);//Estamos a la escucha de si la pagina se a cargado

var inicio ={

    iniciarApp: function () {
        console.log("App iniciada correctamente");
        Animacion.iniciar();
        Recoger.iniciar();  
        Usuarios.iniciar();
    }
}

