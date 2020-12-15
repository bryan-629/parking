
function Formulario(formulario, inputs, idAlerta,idAlertaTexto,btn){
    this.inputs = document.querySelectorAll(`#${formulario} ${inputs}`);
    this.idAlerta=idAlerta;
    this.idAlertaTexto=idAlertaTexto;
    this.btn=document.getElementById(`${btn}`);
    this.limpieza(idAlerta,idAlertaTexto);
    this.testMatricula(idAlerta,idAlertaTexto,this.inputs);

    
    
    
    

   
    

};

Formulario.prototype.estaDadoDeAlta =function (matricula) {
    for (let index = 0; index < Acciones.garaje.length; index++) {
        
    }
    
}

Formulario.prototype.testMatricula = function(idAlerta,idAlertaTexto, input){
    patronMatricula= /^[0-9]{4}[A-Za-z]{3}/;
    this.btn.addEventListener('click', function () {
       input.forEach(element =>{
            if(patronMatricula.test(element.value)){
                return true;
            }else{
                console.log("Incorrecto");
                element.value="";
                Animacion.alertaRoja(idAlerta,idAlertaTexto,"La matricula no es correcta");
                return false;
            }
        }
            );
    });
};


Formulario.prototype.limpieza = function(idAlerta,idAlertaTexto){
    
    this.inputs.forEach(element => //Cogemos todos los inputs y limpiamos las alertas evitando repeticion de codigo
        element.addEventListener('keyup', (e)=>{
            
            Animacion.limpiarAlertaRoja(idAlerta,idAlertaTexto);
        })
    );
};




