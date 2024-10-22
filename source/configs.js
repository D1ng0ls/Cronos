var setting = {
    nome: "",
    sobrenome: "",
    metaCopos: 10,
    minCopos: 45
}

function setSettings() {
    try {
        setting.nome = document.getElementById('nome').value;
        setting.sobrenome = document.getElementById('sobrenome').value;
        setting.metaCopos = document.getElementById('cups').value;
        setting.minCopos = document.getElementById('mins').value;
        setLocalStorage();
    } catch (error) {
        console.error(error);
    }
}

function setLocalStorage() {
    localStorage.setItem('nome', setting.nome);
    localStorage.setItem('sobrenome', setting.sobrenome);
    localStorage.setItem('metaCopos', setting.metaCopos);
    localStorage.setItem('minCopos', setting.minCopos);
}

function getNome() {
    return localStorage.getItem('nome');
}

function getSobrenome() {
    return localStorage.getItem('sobrenome');
}

function getMetaCopos() {
    return localStorage.getItem('metaCopos');
}

function getMinCopos() {
    return localStorage.getItem('minCopos');
}
