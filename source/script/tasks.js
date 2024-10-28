var countTasks = 0;
var countTasksOk = 0;

if(localStorage.getItem("countTasksStorage") != null || localStorage.getItem("countTasksStorage") != "") {
    countTasks = localStorage.getItem("countTasksStorage");
}

if(localStorage.getItem("countTasksOk") != null || localStorage.getItem("countTasksOk") != "") {
    countTasksOk = localStorage.getItem("countTasksOk");
}

carregaTask();
atualizaContadorTask();

function addTask() {
    countTasks++;

    document.getElementById("tasks").innerHTML += `<div class="task task${countTasks}" id="task${countTasks}">
                    <input type="text" name="task${countTasks}" id="todo${countTasks}" maxlength="50" oninput="saveTask(${countTasks})">
                    <input type="checkbox" name="check${countTasks}" id="check${countTasks}" onclick="checkTask(${countTasks})">
                    <i class="bi bi-trash3" id="excluir" onclick="deletaTask(${countTasks})"></i>
                    <i class="hidden" id="dataTask${countTasks}"></i>
                </div>`
    localStorage.setItem("countTasksStorage", countTasks );

    saveTask(countTasks);
    atualizaContadorTask();
    carregaTask();
}

function transcreveTask(todo) {
    var data = document.getElementById("dataTask"+todo);
    var task = document.getElementById("todo"+todo);
    
    data.textContent = task.value;
}

function saveTask(todo) {
    transcreveTask(todo);

    localStorage.setItem("tasks", document.getElementById("tasks").innerHTML );
}

function saveTask2() {
    localStorage.setItem("tasks", document.getElementById("tasks").innerHTML );
}

function deletaTask(task) {
    document.getElementById("task"+task).remove();
    saveTask();
    atualizaContadorTask();
}

function carregaTask() {
    if (localStorage.getItem("tasks") != null) {
        document.getElementById("tasks").innerHTML = localStorage.getItem("tasks");
        for (let i = 1; i <= countTasks; i++) {
            document.getElementById("todo"+i).value = document.getElementById("dataTask"+i).textContent

            if(document.getElementById("todo"+i).classList == "checked") {
                document.getElementById("check"+i).checked = true;
            } else {
                document.getElementById("check"+i).checked = false;
            }
        }
    }

    atualizaContadorTask();
}

function atualizaContadorTask() {
    document.getElementById("tasksFeitas").innerHTML = document.querySelectorAll(".checked").length;
    document.getElementById("tasksNaoFeitas").innerHTML = document.querySelectorAll(".task").length - document.querySelectorAll(".checked").length;
}

function resetTask() {
    localStorage.setItem("tasks", "" );
    localStorage.setItem("countTasksStorage", "" );
}

function checkTask(task){
    countTasksOk++;

    check = document.getElementById("check"+task)
    task = document.getElementById("todo"+task)

    if(check.checked) {
        task.classList.add("checked")
    } else {
        task.classList.remove("checked")
    }

    localStorage.setItem("countTasksOk", countTasksOk)
    saveTask2()
}