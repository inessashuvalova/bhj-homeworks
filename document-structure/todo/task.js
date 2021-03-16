'use strict';

const taskButton = document.getElementById('tasks__add');
const taskForm = document.forms['tasks__form'];
const taskList = document.getElementById('tasks__list');

function taskTemplate(title) {
    let newDiv = document.createElement('div');
    newDiv.className = 'task';

    let newDivTitle = document.createElement('div');
    newDivTitle.className = 'task__title';
    newDivTitle.insertAdjacentHTML('afterbegin', `${title}`);

    let newLinkRemove = document.createElement('a');
    newLinkRemove.className = 'task__remove';
    newLinkRemove.href = '#';
    newLinkRemove.innerHTML = '&times;'
    newLinkRemove.addEventListener('click', () => {
        newDiv.remove();
    })
    
    newDivTitle.append(newLinkRemove);
    newDiv.append(newDivTitle);

    return newDiv;
}


taskButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const taskInput = document.getElementById("task__input");
    const newTask = taskInput.value;

    if (newTask) {
        taskList.append(taskTemplate(newTask));
        taskForm.reset();
    }
    });

