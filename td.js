'use strict';

const addContent = document.getElementById('output');
const addText = document.getElementById('text_input');
const addButton =document.getElementById('trigger');
const tasks = [];
let idNum = 0;
let indexNum = 0;

const resetText = () => {
  addText.value = '';
  addText.focus();
};

addButton.addEventListener('click', () => {
  const addTdId = document.createElement('td');
  const addTdText = document.createElement('td');
  const addTdWorking = document.createElement('td');
  const addTdDelete = document.createElement('td');
  const addTr = document.createElement('tr');
  const addTextValue = addText.value;
  const task = {};
  const nextIdNum = idNum++;
  const nextIndexNum = indexNum++;

  task.id = nextIdNum;
  task.text = addTextValue;
  tasks.push(task);

  addTdId.textContent = tasks[nextIndexNum].id;
  addTr.appendChild(addTdId);

  addTdText.textContent = tasks[nextIndexNum].text;
  addTdText.setAttribute('align','center');
  addTr.appendChild(addTdText);

  const workingButton = document.createElement('button');
  workingButton.textContent = '作業中';
  addTdWorking.appendChild(workingButton);
  addTr.appendChild(addTdWorking);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  addTdDelete.appendChild(deleteButton);
  addTr.appendChild(addTdDelete);

  addContent.appendChild(addTr);

  resetText();
});