
function Formulario(formulario, inputs, idAlerta,idAlertaTexto,btn){
    this.inputs = document.querySelectorAll(`#${formulario} ${inputs}`);
    this.idAlerta=idAlerta;
    this.idAlertaTexto=idAlertaTexto;
    this.btn=document.getElementById(`${btn}`);
    this.limpieza(idAlerta,idAlertaTexto);
    this.comprobar();
    
    
    

   
    

}
Formulario.prototype.iniciar= function(){



};

Formulario.prototype.comprobar =function(){


  
};

Formulario.prototype.limpieza = function(idAlerta,idAlertaTexto){//usamos prototype para las herencias, asi evitamos 
    //crear esta funcion por cada objeto, con el fin de no consumir memoria inecesariamente
    this.inputs.forEach(element => //Cogemos todos los inputs y limpiamos las alertas evitando repeticion de codigo
        element.addEventListener('keyup', (e)=>{
            console.log(e.target.value);

            this.errorAlerta(idAlerta,idAlertaTexto);
            //Animacion.limpiarAlertaRoja(idAlerta,idAlertaTexto);
        })
    );
};
Formulario.prototype.errorAlerta = function(idAlerta,idAlertaTexto){
    Animacion.alertaRoja(idAlerta,idAlertaTexto,"Los datos no son correctos");
};

