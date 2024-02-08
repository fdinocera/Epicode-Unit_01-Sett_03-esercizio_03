

//elementi html
const lista = document.getElementById('lista');
const btnAdd = document.getElementById('button');
const input = document.getElementById('input');

//variabili globali
let task;
let elencoTask = [];
let elencoTaskEseguiti = [];


function visualizzaTask() {

    lista.innerHTML = '';
    elencoTask.forEach((element, index) => {

        //task eseguito: font barrato
        if (elencoTaskEseguiti[index]) {
            lista.innerHTML += `<li class="testo-barrato" onclick="barraTask(${index});" >${element} <i onclick="eliminaTask(event, ${index});"  class="fa-solid fa-trash-can"></i></li>`;
        } else {
            lista.innerHTML += `<li class="testo-normale" onclick="barraTask(${index});" >${element} <i onclick="eliminaTask(event, ${index});"  class="fa-solid fa-trash-can"></i></li>`;
        }
    });
}

btnAdd.addEventListener('click', function () {

    aggiungiTask();
    visualizzaTask();
    resetForm();
});

function aggiungiTask() {

    task = input.value;
    if (task == '') return;

    elencoTask.push(task);
    elencoTaskEseguiti.push(false);
}

function eliminaTask(index) {

    elencoTask.splice(index, 1);
    console.log(elencoTask);
    elencoTaskEseguiti.splice(index, 1);
    console.log(elencoTaskEseguiti);
    visualizzaTask();
}

function barraTask(index) {

    elencoTaskEseguiti[index] = !elencoTaskEseguiti[index];
    //console.log(elencoTaskEseguiti);
    visualizzaTask();
}

function resetForm() {
    input.value = '';
}