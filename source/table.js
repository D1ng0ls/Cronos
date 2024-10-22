let tempNumber = 0;

alterTable();

setInterval(function() {
    alterTable(); // Alerta ao usuário
}, 1000); // 900000 milissegundos = 15 minutos

function alterTable() {         
    let color = "#ddd"
    let data = new Date;
    
    let hora = data.getHours();
    let minutes = data.getMinutes();
    let number;

    if(hora <9) {
        number = 0;
    } else {
        if(hora <10) {
            number = 1;
        } else {
            if(hora == 10 && minutes <15) {
                number = 2;
            } else {
                if(hora < 11) {
                    number = 3;
                } else {
                    if(hora == 11 && minutes < 15) {
                        number = 4;
                    } else {
                        if(hora < 12) {
                            number = 5;
                        } else {
                            if(hora < 13) {
                                number = 6;
                            } else {
                                if(hora == 14 && minutes < 30) {
                                    number = 7;
                                } else {
                                    if(hora == 14 && minutes < 45) {
                                        number = 8;
                                    } else {
                                        if(hora < 16) {
                                            number = 9;
                                        } else {
                                            if(hora == 16 && minutes < 15) {
                                                number = 10;
                                            } else {
                                                if(hora < 18) {
                                                    number = 11;
                                                } else {
                                                    if(hora < 19) {
                                                        number = 12;
                                                    } else {
                                                        if (hora < 21) {
                                                            number = 13;
                                                        } else {
                                                            number = 14;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }    

    if (number == 0) {
        document.getElementById("atividadeAtual").textContent = "Começa mais tarde...";
    } else {
        document.getElementById("atividadeAtual").textContent = document.getElementById("desc"+number).textContent;
    }

    if (number == 14) {
        document.getElementById("atividadeProx").textContent = "Só amanhã...";
    } else {
        document.getElementById("atividadeProx").textContent = document.getElementById("desc"+(number+1)).textContent;
    }

    if (tempNumber != number ){
        document.getElementById("tableSound").play();
        document.title = "Próxima atividade...";
        tempNumber = number;
    }
    
    document.getElementById("at"+number).style.background= color;
}