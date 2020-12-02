

var Animacion= {//Esta clase trata todas las animaciones. Apariciones, desapariciones, alertas, muestra de informacion etc etc.
   
    iniciar : function(){
        document.getElementById("invertir").addEventListener("click",function(){
            Animacion.cambiarInvertir();
            
        })
    },
    cambiarInvertir: function(){
        document.getElementById("cliente").classList.toggle("fondonegro");
        document.getElementById("iconoDia").classList.toggle("fa-moon");
        document.getElementById("iconoDia").classList.toggle("fa-sun");
    },

    alertaRoja: function (id,idTexto,Texto) { //esta funcion muestra la alerta roja
        document.getElementById(`${id}`).classList.add("alertaRojaVisible");
        document.getElementById(`${idTexto}`).innerHTML=Texto;
    },
    limpiarAlertaRoja: function (id,idTexto) { //esta funcion esconde la aletra roja
            document.getElementById(`${id}`).classList.remove("alertaRojaVisible");
            document.getElementById(`${idTexto}`).innerHTML="";   
    }

}


