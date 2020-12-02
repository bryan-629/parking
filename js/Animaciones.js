

var Animacion= {
   
    iniciar : function(){
        document.getElementById("invertir").addEventListener("click",function(){
            Animacion.cambiarInvertir();
            
        })
    },
    cambiarInvertir: function(){
        document.getElementById("cliente").classList.toggle("fondonegro");
        document.getElementById("iconoDia").classList.toggle("fa-moon");
        document.getElementById("iconoDia").classList.toggle("fa-sun");
    }
}


