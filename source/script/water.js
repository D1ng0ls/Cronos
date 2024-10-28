function timer(globalSeconds) {
    let timer;
    
    // 45 minutos em segundos = 2700

    document.getElementById("startButton").addEventListener("click", function() {
        clearInterval(timer); // Limpa qualquer contador existente
        seconds = globalSeconds  * 60;
        updateTimerDisplay();
        timer = setInterval(function() {
            seconds--;
            updateTimerDisplay();
            if (seconds <= 0) {
                clearInterval(timer);
                document.getElementById("alarmSound").play(); // Toca o som quando o timer acabar
                document.title = "Cronograma e água"
            }
        }, 1000);
    });

    function updateTimerDisplay() {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        document.getElementById("time").textContent = 
            String(hours).padStart(2, '0') + ':' + 
            String(minutes).padStart(2, '0') + ':' + 
            String(secs).padStart(2, '0');

        document.title = "Próximo alarme: " + document.getElementById("time").textContent;
    }
}