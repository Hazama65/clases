class OperacionesClass{
    constructor(){
        this.resultados = {
            suma: 0,
            resta: 0,
            multiplicacion: 0,
            division: 0,
            potencia: 0
        }
    }
    operaciones(num1,num2){
        this.resultados.suma=num1+num2,
        this.resultados.resta=num1-num2,
        this.resultados.multiplicacion=num1*num2,
        this.resultados.division=num1/num2,
        this.resultados.potencia=Math.pow(num1,2)
    }

}
module.exports = OperacionesClass;
