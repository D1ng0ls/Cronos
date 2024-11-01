let countRows = 0;

if(localStorage.getItem("countRowsStorage") != null || localStorage.getItem("countRowsStorage") != "") {
    countRows = localStorage.getItem("countRowsStorage");
}

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
    let horaAtual = hora + ":" + minutes
    const max = document.querySelectorAll('[id^="row"]')
    const at = document.querySelectorAll('[id^="atividade"]')

    document.querySelectorAll('[id^="horario"]').forEach((element, i,elements) => {
        let horarioAtual = element.innerHTML.trim()

        if (i < elements.length - 1) {
            let proximoHorario = elements[i + 1].innerHTML.trim(); // Pega o próximo horário
    
            // Agora você pode comparar `horaAtual` com `horarioAtual` e `proximoHorario`
            if (horaAtual >= horarioAtual && horaAtual < proximoHorario) {
                max[i].style.background= color;
                console.log(i)
                console.log(tempNumber)

                if (tempNumber != i ){
                    document.getElementById("tableSound").play();
                    document.title = "Próxima atividade...";
                    tempNumber = i;
                }
            } else {
                max[i].style.background= "";
            }
        }          

        if (i == 0) {
            document.getElementById("atAtual").textContent = "Começa mais tarde...";
        } else {
            document.getElementById("atAtual").textContent = at[i].innerHTML;
        }

        if (i == elements.length) {
            document.getElementById("atProx").textContent = "Só amanhã...";
        } else {
            document.getElementById("atProx").textContent = at[i+1].innerHTML;
        }
    })
}

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