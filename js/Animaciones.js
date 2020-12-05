

var Animacion= {//Esta clase trata todas las animaciones. Apariciones, desapariciones, alertas, muestra de informacion etc etc.

   tamañoFuente:16,


    iniciar : function(){//Agrupamos 
        document.getElementById("invertir").addEventListener("click",function(){
            Animacion.cambiarInvertir();
           
        });
        document.getElementById("tamañofuente").addEventListener("click",function(){
           Animacion.cambiarFuente();
        });
    },


    
    cambiarInvertir: function(){//Creamos una funcion para invertir los colores
        document.getElementById("cliente").classList.toggle("fondonegro");
        document.getElementById("iconoDia").classList.toggle("fa-moon");
        document.getElementById("iconoDia").classList.toggle("fa-sun");
    },



    


    cambiarFuente: function(){//Esta funcion Aumenta el tamaño y cuando el tamaño esta en 23px vuelve a estar a 16
        this.tamañoFuente++;
        if (this.tamañoFuente<=23) {
            document.getElementById('body').style.fontSize = this.tamañoFuente+"px";
        }else{
            this.tamañoFuente=16;
            document.getElementById('body').style.fontSize = this.tamañoFuente+"px";    
        }
        
    },



    alertaRoja: function (id,idTexto,Texto) { //esta funcion muestra la alerta roja
        document.getElementById(`${id}`).classList.add("alertaRojaVisible");
        document.getElementById(`${idTexto}`).innerHTML=Texto;
    },




    limpiarAlertaRoja: function (id,idTexto) { //esta funcion esconde la aletra roja
       
            document.getElementById(`${id}`).classList.remove("alertaRojaVisible");
            document.getElementById(`${idTexto}`).innerHTML="";   
    },





    mostrarContenido:function(id){
        document.getElementById(`${id}`).classList.remove("invisible");
        document.getElementById(`${id}`).classList.add("visible");
    },




    ocultarContenido:function(id){
        document.getElementById(`${id}`).classList.add("invisible");
        document.getElementById(`${id}`).classList.remove("visible");
    },
    

}


