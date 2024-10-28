let isLogged = false;
let timeout;

function startTimer() {
    clearInterval(timeout); // Limpa o temporizador anterior
    timeout = setInterval(verifyLogin, 900000); // Reinicia o temporizador para 15 minutos
}

function verifyLogin() {
    if (getSettingValue('senha') != null && !isLogged) {
        document.getElementById('home').style.display = "none";
        document.getElementById('unlock').style.display = "flex";
    } else {
        document.getElementById('home').style.display = "block";
        document.getElementById('unlock').style.display = "none";
    }
}

// Evento para resetar o temporizador quando houver interação
document.addEventListener("mousemove", startTimer);
document.addEventListener("keydown", startTimer);
document.addEventListener("click", startTimer);

document.getElementById("btn-unlock").addEventListener("click", function() {
    const senha = document.getElementById("senha").value;

    if (senha === getSettingValue("senha")) {
        isLogged = true;
        verifyLogin();
    } else {
        alert("Senha Incorreta!");
    }
});

// Inicia o temporizador ao carregar a página
startTimer();
