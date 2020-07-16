'use strict';

const addContent = document.getElementById('output');
const addText = document.getElementById('text_input');
const addButton =document.getElementById('trigger');
let num = 0;

addButton.addEventListener('click', () => {
  const addTdId = document.createElement('td');
  const addTdText = document.createElement('td');
  const addTdWorking = document.createElement('td');
  const addTdDelete = document.createElement('td');
  const addTr = document.createElement('tr');
  const addTextValue = addText.value;

  const resetText = () => {
    addText.value = '';
    addText.focus();
  };

  addTdId.textContent = num++;
  addTr.appendChild(addTdId);

  addTdText.setAttribute('align','center');
  addTdText.textContent = addTextValue;
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