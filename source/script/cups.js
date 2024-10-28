document.getElementById("copos").value = localStorage.getItem("aguaConsumida");

function contaCopos() {
    var text = "";
    var copos = document.getElementById("copos").value;
    var contador = document.getElementById("coposBebidos")
    var contador2 = document.getElementById("coposCount")

    const min = Math.floor(getSettingValue("cups")/3);
    const medium = getSettingValue("cups") - min;

    for(var i=0; i<copos; i++) {
        text += '<i class="bi bi-cup-straw">'
    }

    contador.innerHTML = text;
    contador2.innerHTML = text + ` (${copos})`;

    localStorage.setItem('aguaConsumida', copos);

    if (copos <= min) {
        contador.innerHTML += "<br><br><span style='color:var(--color-red)'>Ruim!</span>"
        contador2.style.color = "var(--color-red)";
    } else {
        if(copos < medium) {
            contador.innerHTML += "<br><br><span style='color:var(--color-blue)'>Ok!</span>"
            contador2.style.color = "var(--color-blue)";
        } else {
            contador.innerHTML += "<br><br><span style='color:var(--color-green)'>Ótimo!</span>"
            contador2.style.color = "var(--color-green)";
        }
    }
}

function somaCopo(soma) {
    var copos = document.getElementById("copos")
    
    if(copos.value > 0) {
        if(!soma) {
            copos.value--;
        }
    }

    if(copos.value < 99) {
        if(soma) {
            copos.value++;
        }
    }
    
    contaCopos();
}