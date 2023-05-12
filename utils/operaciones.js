const operaciones =(objeto,num1,num2)=>{
    objeto.suma=num1+num2;
    objeto.resta=num1-num2;
    objeto.multiplicacion=num1*num2;
    objeto.division=num1/num2;
    objeto.potencia=Math.pow(num1,2);
    return objeto;
}

module.exports={
    operaciones
}