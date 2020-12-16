var Usuarios= {
    usuario:null,
    pass: null,
    iniciar: function(){
        this.usuario=new Array();
        this.pass=new Array();
        this.usuario.push("Jesus");
        this.pass.push("Administrador1"); 
    },


    comprobar: function(nombre, contra){//Comprobamos si existen los datos introducidos. SE PROCESA EN RECOGIDA DE DATOS
       
        for(var i=0 ; i<this.usuario.length; i++){
            if (nombre==this.usuario[i]) {
                if (contra==this.pass[i]) {
                    i=this.usuario.length;
                    return true;
                    
                }
            }
            if (i==this.usuario.length-1) {
                return false
            }
        }
    }
}