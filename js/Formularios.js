
function Formulario(formulario, inputs, idAlerta,idAlertaTexto,btn){
    this.inputs = document.querySelectorAll(`#${formulario} ${inputs}`);
    this.idAlerta=idAlerta;
    this.idAlertaTexto=idAlertaTexto;
    this.btn=document.getElementById(`${btn}`);
    this.limpieza(idAlerta,idAlertaTexto);
    var matricula=null;
    var marca=null;
    var modelo=null;
    var color=null;
    var nombre=null;
    var apellido=null;
    var email=null;
}










Formulario.prototype.testInputs = function(inputArray){
    let patronMatricula= /^[0-9]{4}[A-Za-z]{3}$/;
    let patrontxt= /^[A-Za-z]{2,15}$/;
    let patronModelo = /^[A-Za-z0-9]{2,15}$/;
    
    let error = 0;

       inputArray.forEach(element =>{
          switch (element.name) {
              case "Matricula":
                    if(patronMatricula.test(element.value)){
                        this.matricula=element.value;
                        this.matricula= this.matricula.toUpperCase();
                    }else{
                        error= 1;
                        Animacion.alertaRoja(this.idAlerta,this.idAlertaTexto,"La matricula no es valida");
                        return error;
                    }
                  break;
                  case "Marca":
                        if(patrontxt.test(element.value)){
                            this.marca=element.value;
                            
                        }else{
                            if(error==0){
                                error= 2;
                                Animacion.alertaRoja(this.idAlerta,this.idAlertaTexto,"La marca no es valida");
                                return error;
                            }  
                        }
                    break;
                    case "Modelo":
                            if(patronModelo.test(element.value)){
                                this.modelo=element.value;
                            }else{
                                if(error==0){
                                    error= 3;
                                    Animacion.alertaRoja(this.idAlerta,this.idAlertaTexto,"El modelo no es valido");
                                    return error;
                                }
                            }
                  break;
                  case "Color":
                        if(patrontxt.test(element.value)){
                            this.color=element.value;
                        }else{
                            if(error==0){
                                error= 4;
                                Animacion.alertaRoja(this.idAlerta,this.idAlertaTexto,"El color no es valido");
                                return error;
                            }  
                        }
                  
                  break;
                  case "Nombre":
                        if(patrontxt.test(element.value)){
                            this.nombre=element.value;
                        }else{
                            if(error==0){
                                error= 5;
                                Animacion.alertaRoja(this.idAlerta,this.idAlertaTexto,"El nombre no es valido");
                                return error;
                            }
                        }
                    
                  break;
                  case "Apellido":
                        if(patrontxt.test(element.value)){
                            this.apellido=element.value;
                        }else{
                            if(error==0){
                                error= 6;
                                Animacion.alertaRoja(this.idAlerta,this.idAlertaTexto,"El apellido no es valido");
                                return error;
                            }
                        }
                  break;
                  case "Email":
                        if(patrontxt.test(element.value)){
                            this.email=element.value;
                        }else{
                            if(error==0){
                                error= 7;
                                Animacion.alertaRoja(this.idAlerta,this.idAlertaTexto,"el email no es valido");
                                return error;
                            }
                        }
                  
                  break;
          }

          }
            
            );
            if (error==0) {
                return true;
            }else{
                return false;
            }
            
    }


Formulario.prototype.limpiezakeyup = function(idAlerta,idAlertaTexto){
    
    this.inputs.forEach(element => //Cogemos todos los inputs y limpiamos las alertas evitando repeticion de codigo
        element.addEventListener('keyup', (e)=>{
            
            Animacion.limpiarAlertaRoja(idAlerta,idAlertaTexto);
        })
    );
};
Formulario.prototype.limpieza= function(idAlerta,idAlertaTexto){
    Animacion.limpiarAlertaRoja(idAlerta,idAlertaTexto);
}

Formulario.prototype.limpiarValores= function () {//limpia los inputs del formulario
    this.inputs.forEach(element => {
        element.value="";
    });
}



