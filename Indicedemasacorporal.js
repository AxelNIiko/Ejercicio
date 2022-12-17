window.onload = iniciar;

function iniciar(){
    var btncalcular = document.gotElementById("btncalcular");
    btncalcular.addEventListener("Click", Clickbtncalcular);

}

function Clickbtncalcular(){
    var txtedad = document.getElementById("txtedad");
    var edad = txtedad.value;
    alert(edad);

    var txtpeso = document.getElementById("txtpeso");
    var peso = txtpeso.value;
    alert(peso);

    var txtaltura = document.getElementById("txtaltura");
    var altura = txtaltura.value;
    alert(altura);

    var imc = peso / (altura * altura);
    alert(imc);
    if(edad < 45){
        if(imc < 22){
            alert("Tu indice de masa corporal es bajo:");
        }else if(imc >= 22){
            alert("Tu indice de masa corporal es medio:");
        }
    }else if(edad >= 45){
        if(imc < 22){
            alert("Tu indice de masa corporal es medio:");
        }else if(imc >= 22){
            alert("Tu indice de masa corporal es alto:");
        }
    }
}

