let countRows = 0;

if(localStorage.getItem("countRowsStorage") != null || localStorage.getItem("countRowsStorage") != "") {
    countRows = localStorage.getItem("countRowsStorage");
}

// let tempNumber = 0;

// alterTable();

// setInterval(function() {
//     alterTable(); // Alerta ao usuário
// }, 1000); // 900000 milissegundos = 15 minutos

// function alterTable() {         
//     let color = "#ddd"
//     let data = new Date;
    
//     let hora = data.getHours();
//     let minutes = data.getMinutes();
//     let number = countRows;
//     let maxNumber;
//     let minNumber;

//     verifyRow()

//     function verifyRow() {
//         for (let i = countRows; i >= 0; i--) {
//             if (document.getElementById("row"+i)) {
//                 maxNumber = i;
//                 break
//             }
//         }
//         for (let i = 0; i <= countRows; i++) {
//             if (document.getElementById("row"+i)) {
//                 minNumber = i;
//                 break
//             }
//         }
//     }

//     if (number == minNumber) {
//         document.getElementById("atividadeAtual").textContent = "Começa mais tarde...";
//     } else {
//         document.getElementById("atividadeAtual").textContent = document.getElementById("atividade3").innerHTML;
//     }

//     if (number == maxNumber) {
//         document.getElementById("atividadeProx").textContent = "Só amanhã...";
//     } else {
//         document.getElementById("atividadeProx").textContent = document.getElementById("atividade3").innerHTML;
//     }

//     if (tempNumber != number ){
//         document.getElementById("tableSound").play();
//         document.title = "Próxima atividade...";
//         tempNumber = number;
//     }
    
//     document.getElementById("at"+number).style.background= color;
// }

function openAddRow(id) {
    if (id != 0) {
        document.getElementById('hora').value = document.getElementById("horario"+id).innerHTML.trim()
        document.getElementById('desc').value = document.getElementById("atividade"+id).innerHTML.trim()
        deleteRow(id)
        document.querySelector(".add-row").classList.remove("hidden")
    } else {
        document.querySelector(".add-row").classList.toggle("hidden")
    }
}

function addRow() {
    if (document.getElementById('hora').value != "") {
        countRows++;
        document.getElementById("tabela").innerHTML += `<tr id="row${countRows}"><td id="horario${countRows}">
                                        ${document.getElementById('hora').value}
                                    </td>
                                    <td id="atividade${countRows}">
                                        ${document.getElementById('desc').value}
                                    </td>
                                    <td>
                                        <i class="bi bi-trash3" id="excluir" onclick="deleteRow(${countRows})"></i>
                                        <i class="bi bi-pencil" id="editar" onclick="openAddRow(${countRows})"></i>
                                    </td></tr>`

        ordenaRow(countRows)

        localStorage.setItem("countRowsStorage", countRows );
        saveRow()
    } else {
        alert("Digite um horário!")
    }
}

function ordenaRow(row) {
    const rows = Array.from(document.querySelectorAll("[id^='row']"));

    function convertToMinutes(timeString) {
        const [hours, minutes] = timeString.split(":").map(Number);
        return hours * 60 + minutes;
    }

    rows.sort((a, b) => {
        const timeA = convertToMinutes(a.querySelector("[id^='horario']").innerHTML);
        const timeB = convertToMinutes(b.querySelector("[id^='horario']").innerHTML);
        return timeA - timeB;
    });

    const tableBody = document.querySelector("#tabela");
    rows.forEach(row => tableBody.appendChild(row));
}

function saveRow() {
    localStorage.setItem("tabela", document.getElementById("tabela").innerHTML);
}

function carregaRow() {
    document.getElementById("tabela").innerHTML = localStorage.getItem("tabela")
}

function editRow(id){
    deleteRow(id)
}

function deleteRow(row) {
    document.getElementById("row"+row).remove();
    saveRow();
}

function resetRow() {
    localStorage.setItem("tabela", "" );
    localStorage.setItem("countRowsStorage", "");
}