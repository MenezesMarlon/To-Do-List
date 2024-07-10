let buttonAdd = document.getElementById('addTask');
let buttonClear = document.getElementById('clearTasks');
let input = document.getElementById('input-tasks');
let tasksContainer = document.getElementById('tasks');

function addTask() {
    if (input.value.trim() !== '') {
        let task = document.createElement('p');
        task.innerText = '- ' + input.value.trim();
        tasksContainer.appendChild(task);
        input.value = '';

        task.addEventListener('click', toggleTaskCompletion);
    }
}

function toggleTaskCompletion(event) {
    let task = event.target;
    task.style.textDecoration = task.style.textDecoration === 'line-through' ? '' : 'line-through';
}

function clearTasks() {
    tasksContainer.innerHTML = '';
}

buttonAdd.addEventListener('click', addTask);
buttonClear.addEventListener('click', clearTasks);
