let vector = [90,25,31,4,500,60,72,87,10,123,5,23,1,321,-210];
let nombres = ['pedro', 'martin','juan'];


// for (VARIABLE, CONDICION, INCREMENTO o DECREMENTO)
let mayor = 0;
let menor = 99999;
let acumulador = 0;

for (let i = 0; i < vector.length; i++){
    if(mayor < vector[i]){
        mayor = vector[i];
    }

    if(menor > vector[i]){
        menor = vector[i];
    }

    acumulador = acumulador + vector[i];
}

console.log("Mayor " + mayor);
console.log("Menor " + menor);
console.log("sumatoria de elementos " + acumulador);
console.log("Pomedio de elementos " + (acumulador / vector.length));

// function calcular() {
//     event.preventDefault();
//     let promedio = 0;
//     let aprobo = "NO";
//     let color = 'red';
//     let NMayor = 0;
//     let NMenor = 0;
    
//     //Ingresa desde el formulario como STRING
//     let N1 = parseInt(document.getElementById('nota1').value);
//     let N2 = parseInt(document.getElementById('nota2').value);
//     let N3 = parseInt(document.getElementById('nota3').value);
   
//     promedio = Math.round((N1 + N2 + N3)/3);
   
//     if(promedio >= 6){
//         aprobo = "SI";
//         color = "green";
//     }
// //ACA SACO EL NUMERO MAYOR
//     if(N1 > N2 && N1 > N3){
//         NMayor = N1;
//     }else if(N2 > N1 && N2 > N3){
//         NMayor = N2;
//     }else{
//         NMayor = N3;
//     }
// //ACA SACO EL NUMERO MENOR
//     if(N1 < N2 && N1 < N3){
//         NMenor = N1;
//     }else if(N2 < N1 && N2 < N3){
//         NMenor = N2;
//     }else{
//         NMenor = N3;
//     }
    
    
//     // alert(resultado);
//     document.getElementById("resultado").innerHTML = promedio;
//     document.getElementById("n1").innerHTML = N1;
//     document.getElementById("n2").innerHTML = N2;
//     document.getElementById("n3").innerHTML = N3;
//     document.getElementById("aprobo").innerHTML = aprobo;
//     document.getElementById("aprobo").style.color = color;

//     document.getElementById("NMayor").innerHTML = NMayor;
//     document.getElementById("NMenor").innerHTML = NMenor;

// }