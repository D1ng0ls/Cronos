function verifyInputs() {
    if (document.getElementById('nome').value == "" || document.getElementById('cups').value == "" || document.getElementById('mins').value == "") {
        document.getElementById("btnSalvar").disabled = true;
    } else {
        document.getElementById("btnSalvar").disabled = false;
    }
}

var setting = {
    nome: "",
    senha: "",
    cups: 10,
    mins: 45
}

function setSettings() {
    try {
        setting.nome = document.getElementById('nome').value;
        setting.cups = document.getElementById('cups').value;
        setting.mins = document.getElementById('mins').value;
        setting.senha = document.getElementById('senha').value;
        setLocalStorage();
        alert("Dados Salvos!")
    } catch (error) {
        console.error(error);
    }
}

function setLocalStorage() {
    localStorage.setItem('nome', setting.nome);
    localStorage.setItem('cups', setting.cups);
    localStorage.setItem('mins', setting.mins);
    localStorage.setItem('senha', setting.senha);
}

function getSettingValue(key) {
    return  localStorage.getItem(key) || null;
}