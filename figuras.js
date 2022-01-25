 //Código del cuadrado
 console.group("Cuadrados")
//  const ladoCuadrado = 5;
//  console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")


 function perimetroCuadrado(lado) {
     return lado * 4;
 }

//  const perimetroCuadrado = ladoCuadrado * 4;
//  console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

 function areaCuadrado(lado) {
     return lado * lado;
 }

//  const areaCuadrado = ladoCuadrado * ladoCuadrado;
//  console.log("El área del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

 //Código del triángulo
 console.group("Triangulos")

 function perimetroTriangulo(lado1,lado2,base) {
     return lado1 + lado2 + base;
 }

 function areaTriangulo(base, altura) {
     return (base * altura) / 2;
 }
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados de mi triángulo miden: " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm y " 
// + baseTriangulo 
// + "cm.")

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm.")

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro de mi triángulo es de: " + perimetroTriangulo + "cm.")

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/ 2;
// console.log("El área de mi triángulo es de: " + areaTriangulo +"cm^2")
console.groupEnd();

//Código del círculo
console.group("Círculos")

function diametroCirculo(radio) {
    return radio * 2;
}

// //PI
const PI = Math.PI;
console.log("PI es de: " + PI )

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm.")


//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es de: " + diametroCirculo + "cm.")



// //Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm.")

// //Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI
// console.log("El área del círculo es de: " + areaCirculo + "cm.")
console.groupEnd();