
document.addEventListener('DOMContentLoaded', function(){
    Acciones.iniciar();
    Animacion.iniciar();
},false);


var Acciones= {
    usuario: sessionStorage.getItem('nombre'),
    pass: sessionStorage.getItem('pass'),



    iniciar: function(){
        if(this.usuario==null|| this.pass==null){//VAMOS A CONTROLAR QUE REALMENTE A INICIADO SESION,
            // Y QUE ACCEDA OBLIGATORIAMENTE ACCEDIENDO POR EL LOGIN, DE ESTA MANERA EVITAMOS EL ACCESO POR URL
            location.href="../Index.html";
            sessionStorage.clear();
    }else{//Si esta codo correcto....
        document.getElementById("nombreUsuario").innerHTML="Bienvenido "+ this.usuario;
        Animacion.mostrarContenido("cliente");

        //ESCUCHAMOS SI CAMBIA A URL Y MUESTRA LA ALERTA DE QUE SE PUEDEN PERDER LOS DATOS
        window.addEventListener('beforeunload', function (e) {
            e.returnValue= sessionStorage.clear();//limpiamos los datos para que no le permita entrar 
          }); 
    } 
}

}

    

