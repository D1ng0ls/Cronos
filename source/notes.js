var countNotes = 0;

if(localStorage.getItem("countNotesStorage") != null || localStorage.getItem("countNotesStorage") != "") {
    countNotes = localStorage.getItem("countNotesStorage");
}

carregaNote();
atualizaContadorNote();

function addNote() {
    countNotes++;

    document.getElementById("notations").innerHTML += `<div class="contaNotas note note${countNotes}" id="notation${countNotes}"><i class="bi bi-trash3" id="excluir" onclick="deletaNote(${countNotes})"></i><textarea name="note${countNotes}" id="note${countNotes}" onchange="saveNote(${countNotes})"></textarea></div>`
    localStorage.setItem("countNotesStorage", countNotes );

    saveNote(countNotes);
    atualizaContadorNote();
}

function transcreveNote(note) {
    var nota = document.getElementById("note"+note);
    
    nota.textContent = nota.value;
}

function saveNote(note) {
    transcreveNote(note);

    localStorage.setItem("notas", document.getElementById("notations").innerHTML );
}

function saveNote2() {
    localStorage.setItem("notas", document.getElementById("notations").innerHTML );
}

function deletaNote(note) {
    document.getElementById("notation"+note).remove();
    saveNote2();
    atualizaContadorNote();
}

function carregaNote() {
    if (localStorage.getItem("notas") != null) {
        document.getElementById("notations").innerHTML = localStorage.getItem("notas");
    }

    atualizaContadorNote();
}

function atualizaContadorNote() {
    document.getElementById("anotacaoCount").innerHTML = document.querySelectorAll(".contaNotas").length;
}

function resetNote() {
    localStorage.setItem("notas", "" );
    localStorage.setItem("countNotesStorage", "" );
}
