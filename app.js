// const sumar =(objeto,num1,num2)=>{
//     objeto.suma=num1+num2;
//     return objeto;
// }

// const restar =(objeto,num1,num2)=>{
//     objeto.resta=num1-num2;
//     return objeto;
// }

// const multiplicar =(objeto,num1,num2)=>{
//     objeto.multiplicacion=num1*num2;
//     return objeto;
// }

// const dividir =(objeto,num1,num2)=>{
//     objeto.division=num1/num2;
//     return objeto;
// }

// const elevar =(objeto,num1)=>{
//     objeto.potencia=Math.pow(num1,2);
//     return objeto;
// }

const {operaciones}=require("./utils/operaciones.js")



const resultados = {
    suma: 0,
    resta: 0,
    multiplicacion: 0,
    division: 0,
    potencia: 0
}

let numero1 = 10, numero2 = 14;

// sumar(resultados,numero1,numero2);
// restar(resultados,numero1,numero2);
// multiplicar(resultados,numero1,numero2);
// dividir(resultados,numero1,numero2);
// elevar(resultados,numero1);

operaciones(resultados,numero1,numero2);

console.log(resultados);