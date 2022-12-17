// Ejecutando el caballo de ajedrez
let filaString = prompt("Ingresa el movimiento del caballo comenzando por la fila");
let columnaString = prompt("Ingresa la columna");

let fila = parseInt(filaString);
let columna = parseInt(columnaString);
let salidaFila;
let salidaCol;
if(fila > 0 && fila < 9 && columna > 0 && columna < 9){
    console.log("El caballo de (" + fila + "," + columna + ") puedo saltar a:");

debugger
salidaFila + 2;
salidaCol + 1;
if(salidaFila < 9 && salidaCol < 9){
    console.log(salidaFila, salidaCol)
}
salidaFila + 1;
salidaCol + 2;
if(salidaFila < 9 && salidaCol < 9){
    console.log(salidaFila, salidaCol)
}
salidaFila - 2;
salidaCol - 1;
if(salidaFila > 0 && salidaCol > 0){
    console.log(salidaFila, salidaCol)
}    
salidaFila + 2;
salidaCol - 1;
if(salidaFila < 9 && salidaCol > 0){
    console.log(salidaFila, salidaCol)
}    
salidaFila - 1;
salidaCol - 2;
if(salidaFila > 0 && salidaCol > 0){
    console.log(salidaFila, salidaCol)
} 
salidaFila + 1;
salidaCol - 2;
if(salidaFila < 9 && salidaCol > 0){
    console.log(salidaFila, salidaCol)
} 
salidaFila - 2;
salidaCol + 1;
if(salidaFila > 0 && salidaCol < 9){
    console.log(salidaFila, salidaCol)
} 
salidaFila - 2;
salidaCol + 1;
if(salidaFila > 0 && salidaCol < 9){
    console.log(salidaFila, salidaCol)
} 
salidaFila - 1;
salidaCol + 2;
if(salidaFila > 0 && salidaCol < 9){
    console.log(salidaFila, salidaCol)
} 
}   