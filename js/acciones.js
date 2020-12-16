
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
    clientes: [],

    iniciar: function(){
        var coche1= new Coches("1234ASD","Seat","Ibiza","Rojo","Juan","Fernandez","JuanFernan@gmail.com");
        this.clientes.push(coche1);
        var formEntrada=new Formulario('entrada', 'input', 'alertaEntrada','alertaTextoEntrada','botonEntrada');
        var formSalida=new Formulario('salida', 'input', 'alertaSalida','alertaTextoSalida','botonSalida');
        var formAlta=new Formulario('alta', 'input', 'alertaAlta','alertaTextoAlta','botonAlta');
        var formConsulta=new Formulario('salida', 'input', 'alertaSalida','alertaTextoSalida','botonSalida');
       

        formEntrada.btn.addEventListener('click', function(){
           
           if (formEntrada.testInputs(formEntrada.inputs)) {//Nos muestra alertas si algo no es correcto
            //Si es true, todo correcto
              if(!formEntrada.estaDadoDeAlta(formEntrada.matricula)){//nos comprueba si existe la matricula 
                //si es false, no esta dado de alta
                Animacion.alertaRoja(formEntrada.idAlerta,formEntrada.idAlertaTexto,"El usuario no esta dado de alta");
              }else{//Si el cliente esta dado de alta...
                if (formEntrada.estaDentro(formEntrada.matricula)) {//Comprobamos si esta dentro, true si esta dentro
                    Animacion.alertaRoja(formEntrada.idAlerta,formEntrada.idAlertaTexto,"El vehiculo ya esta dentro");
                }else{
                    Acciones.garaje.push(formEntrada.matricula.toUpperCase());
                    alert("Levantando barrera...");
                    formEntrada.limpiarValores();
                }
              }
           } 
        });
        formSalida.btn.addEventListener('click', function(){//Nos muestra alertas si algo no es correcto
            if (formSalida.testInputs(formSalida.inputs)) {
                if(!formSalida.estaDadoDeAlta(formSalida.matricula)){//nos comprueba si existe la matricula //si es false, no esta dado de alta
                    Animacion.alertaRoja(formSalida.idAlerta,formSalida.idAlertaTexto,"El usuario no esta dado de alta");
                  }else{
                    if (!formSalida.estaDentro(formSalida.matricula)) {//Comprobamos si esta dentro, true si esta dentro
                        Animacion.alertaRoja(formSalida.idAlerta,formSalida.idAlertaTexto,"El vehiculo no esta dentro");
                    }else{
                        for (let index = 0; index <Acciones.garaje.length; index++) {
                           if (Acciones.garaje[index]==formSalida.matricula) {
                            Acciones.garaje.splice(index, 1);
                            index=Acciones.garaje.length;
                           };

                        }
                        alert("Levantando barrera...");
                        formSalida.limpiarValores();
                        
                    }
                  }
            }
            
        });
        formAlta.btn.addEventListener('click', function(){
            if (formAlta.testInputs(formAlta.inputs)) {
                if(formAlta.estaDadoDeAlta(formAlta.matricula)){
                    Animacion.alertaRoja(formAlta.idAlerta,formAlta.idAlertaTexto,"La matricula está dada de alta");
                  }else{
                      var cliente= new Coches(formAlta.matricula,formAlta.marca,formAlta.modelo,formAlta.color,formAlta.nombre,formAlta.apellido,formAlta.email);
                    Acciones.clientes.push(cliente);
                    alert("Se ha dado de alta correctamente");
                  }
            }
           
            formAlta.limpiarValores();
            
        });





















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
        formSalida.limpiarValores();
        formEntrada.limpiarValores();
        formAlta.limpiarValores();
        formAlta.limpieza(formAlta.idAlerta,formAlta.idAlertaTexto);
        formEntrada.limpieza(formEntrada.idAlerta,formEntrada.idAlertaTexto);
        formSalida.limpieza(formSalida.idAlerta,formSalida.idAlertaTexto);
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
        formSalida.limpiarValores();
        formEntrada.limpiarValores();
        formAlta.limpiarValores();
        formAlta.limpieza(formAlta.idAlerta,formAlta.idAlertaTexto);
        formEntrada.limpieza(formEntrada.idAlerta,formEntrada.idAlertaTexto);
        formSalida.limpieza(formSalida.idAlerta,formSalida.idAlertaTexto);
        Animacion.mostrarContenido('entrada');
        Animacion.ocultarContenido('salida');
        Animacion.active('btnEntrada');
        Animacion.desactive('btnSalida');
        Animacion.desactive('btnAlta');
        Animacion.desactive('btnConsulta');
        
    });
    this.btnSalida.addEventListener('click', ()=>{
        formSalida.limpiarValores();
        formEntrada.limpiarValores();
            formAlta.limpiarValores();
            formAlta.limpieza(formAlta.idAlerta,formAlta.idAlertaTexto);
        formEntrada.limpieza(formEntrada.idAlerta,formEntrada.idAlertaTexto);
        formSalida.limpieza(formSalida.idAlerta,formSalida.idAlertaTexto);
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
        formSalida.limpiarValores();
        formEntrada.limpiarValores();
        formAlta.limpiarValores();
        formAlta.limpieza(formAlta.idAlerta,formAlta.idAlertaTexto);
        formEntrada.limpieza(formEntrada.idAlerta,formEntrada.idAlertaTexto);
        formSalida.limpieza(formSalida.idAlerta,formSalida.idAlertaTexto);
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

