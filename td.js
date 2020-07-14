'use strict';

const addContent = document.getElementById('output');
const addText = document.getElementById('textinput');
const addButton =document.getElementById('triger');
let num = 0;


addButton.addEventListener('click',() => {
  const add_td_id = document.createElement('td');
  const add_td_text = document.createElement('td');
  const add_td_working = document.createElement('td');
  const add_td_delete = document.createElement('td');
  const add_tr = document.createElement('tr');
  const add_text_value = addText.value;

  const resetText = () => {
    addText.value = '';
    addText.focus();
  };

  add_td_id.textContent = num++;
  add_tr.appendChild(add_td_id);

  add_td_text.setAttribute('align','center');
  add_td_text.textContent = add_text_value;
  add_tr.appendChild(add_td_text);

  const workingButton = document.createElement('button');
  workingButton.textContent = '作業中';
  add_td_working.appendChild(workingButton);
  add_tr.appendChild(add_td_working);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  add_td_delete.appendChild(deleteButton);
  add_tr.appendChild(add_td_delete);

  addContent.appendChild(add_tr);

  resetText();
});