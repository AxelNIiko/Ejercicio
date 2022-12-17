//Ejercicio para calcular la hipotenusa de un triangulo con el teorema de pitagoras
var
cat1, cat2, hipotenusa;
cat1 = prompt("Escribe el valor de un cateto");
cat2 = prompt("Escribe el valor del otro cateto");
cat1 = parseInt(cat1);
cat2 = parseInt(cat2);
hipotenusa = Math.sqrt(cat1 * cat1 + cat2 * cat2);
alert("La hipotenusa del triangulo de catetos" + cat1 + "y" + cat2 + "es" + hipotenusa);