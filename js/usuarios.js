var Usuarios= {
    usuario:null,
    pass: null,
    iniciar: function(){
        this.usuario=new Array();
        this.pass=new Array();
        this.usuario.push("Jesus");
        this.pass.push("Administrador1"); 
    },


    compobar: function(nombre, contra){//Comprobamos si existen los datos introducidos
       
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