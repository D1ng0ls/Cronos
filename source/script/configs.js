function verifyInputs() {
    if (document.getElementById('nome').value == "" || document.getElementById('cups').value == "" || document.getElementById('mins').value == "") {
        document.getElementById("btnSalvar").disabled = true;
    } else {
        document.getElementById("btnSalvar").disabled = false;
    }
}

var setting = {
    nome: "",
    sobrenome: "",
    metaCopos: 10,
    minCopos: 45
}

function setSettings() {
    try {
        setting.nome = document.getElementById('nome').value;
        setting.metaCopos = document.getElementById('cups').value;
        setting.minCopos = document.getElementById('mins').value;
        setLocalStorage();
        alert("Dados Salvos!")
    } catch (error) {
        console.error(error);
    }
}

function setLocalStorage() {
    localStorage.setItem('nome', setting.nome);
    localStorage.setItem('metaCopos', setting.metaCopos);
    localStorage.setItem('minCopos', setting.minCopos);
}

function getNome() {
    return localStorage.getItem('nome');
}

function getMetaCopos() {
    return localStorage.getItem('metaCopos');
}

function getMinCopos() {
    return localStorage.getItem('minCopos');
}
