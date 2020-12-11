
class Formulario{
    constructor(inputs);
    inputs=inputs;

        limpiadoAlertas(array){
            array.forEach(element => {
                
            });
        }

    

}

Formulario.prototype.deteccionInputs = function(formulario,input){
    inputs = document.querySelectorAll(`${formulario} ${input}`);
    return inputs;
}