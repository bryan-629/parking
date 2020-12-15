
document.addEventListener('DOMContentLoaded', function(){
    Acciones.iniciar();


    

},false);

var Acciones= {
    usuario: sessionStorage.getItem('nombre'),
    pass: sessionStorage.getItem('pass'),
    btnEntrada: document.getElementById("btnEntrada"),
    btnSalida: document.getElementById("btnSalida"),
    btnAlta: document.getElementById("btnAlta"),
    btnConsulta: document.getElementById("btnConsulta"),
    tamañoFuente: sessionStorage.getItem('tamaño'),
    color: sessionStorage.getItem('color'),
    garaje:[],
    coches: [],

    iniciar: function(){

        formEntrada=new Formulario('entrada', 'input', 'alertaEntrada','alertaTextoEntrada','botonEntrada');
        formSalida=new Formulario('salida', 'input', 'alertaSalida','alertaTextoSalida','botonSalida');
        formAlta=new Formulario('alta', 'input', 'alertaAlta','alertaTextoAlta','botonAlta');
        formConsulta=new Formulario('salida', 'input', 'alertaSalida','alertaTextoSalida','botonSalida');
       
        document.getElementById('matriculaEntrada').addEventListener('keyup', function(e){
            Animacion.limpiarAlertaRoja('alertaEntrada','alertaTextoEntrada');
        });
    
        
        document.getElementById('body').style.fontSize=this.tamañoFuente+ "px";//RECIVIMOS LOS DATOS DEL OTRO HTML
        if (this.color == "true") {
            document.getElementById('body').classList.add('fondonegro');
            this.btnAlta.classList.add('fondonegro');
            this.btnSalida.classList.add('fondonegro');
            this.btnEntrada.classList.add('fondonegro');
            this.btnConsulta.classList.add('fondonegro');
        }

        



        

        if(this.usuario==null|| this.pass==null){//VAMOS A CONTROLAR QUE REALMENTE A INICIADO SESION,
            // Y QUE ACCEDA OBLIGATORIAMENTE ACCEDIENDO POR EL LOGIN, DE ESTA MANERA EVITAMOS EL ACCESO POR URL
            location.href="../Index.html";
            sessionStorage.clear();
    }else{//Si esta codo correcto....
       
        document.getElementById("nombreUsuario").innerHTML="Bienvenido "+ this.usuario;
        Animacion.mostrarContenido("entrada");

        //ESCUCHAMOS SI CAMBIA A URL Y MUESTRA LA ALERTA DE QUE SE PUEDEN PERDER LOS DATOS
        window.addEventListener('beforeunload', function (e) {
            e.returnValue= sessionStorage.clear();//limpiamos los datos para que no le permita entrar 
          }); 
    

    this.btnAlta.addEventListener('click', ()=>{// CONTROLAMOS LAS ANIMACIONES. SE PUEDE COMPIMIZAR USANDO e.target BUT ES TARDE
        Animacion.mostrarContenido('alta');
        Animacion.ocultarContenido('entrada');
        Animacion.ocultarContenido('salida');
        Animacion.ocultarContenido('consulta');
        Animacion.active('btnAlta');
        Animacion.desactive('btnEntrada');
        Animacion.desactive('btnSalida');
        Animacion.desactive('btnConsulta');
    });
    this.btnEntrada.addEventListener('click', ()=>{
        Animacion.mostrarContenido('entrada');
        Animacion.ocultarContenido('salida');
        Animacion.active('btnEntrada');
        Animacion.desactive('btnSalida');
        Animacion.desactive('btnAlta');
        Animacion.desactive('btnConsulta');
        
    });
    this.btnSalida.addEventListener('click', ()=>{
            Animacion.mostrarContenido('salida');
            Animacion.ocultarContenido('entrada');
            Animacion.ocultarContenido('alta');
            Animacion.ocultarContenido('consulta');
            Animacion.active('btnSalida');
            Animacion.desactive('btnEntrada');
            Animacion.desactive('btnAlta');
            Animacion.desactive('btnConsulta');
    });
    this.btnConsulta.addEventListener('click', ()=>{
        Animacion.mostrarContenido('consulta');
        Animacion.ocultarContenido('entrada');
        Animacion.ocultarContenido('salida');
        Animacion.ocultarContenido('alta');
        Animacion.active('btnConsulta');
        Animacion.desactive('btnEntrada');
        Animacion.desactive('btnAlta');
        Animacion.desactive('btnSalida');
});
}
    
}

}   

