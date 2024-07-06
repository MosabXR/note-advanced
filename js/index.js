'use strict';

import Note from './note.module.js';

let notes = [];
let noteText = document.querySelector('textarea');
let colors = document.querySelectorAll('.color-selector .btn');
let currentColor = 'bg-primary-subtle';
let notesContainer = document.querySelector('.row');
notesContainer.innerHTML = `
    <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-block">
            <div class="note overflow-hidden bg-body-tertiary rounded-2 position-relative">
              <form>
                <textarea class="w-100 border-0 bg-body-tertiary p-4" maxlength="455"></textarea>
                <div class="options-buttons position-absolute w-100 bottom-0 d-flex">
                  <button type="button" class="btn btn-danger flex-grow-1 rounded-0">هتكلسن</button>
                  <button type="submit" class="btn btn-success flex-grow-1 rounded-0">رد</button>
                </div>
              </form>
            </div>
          </div>
    `; 

colors.forEach(element => {
    element.addEventListener('click', (e) => {
        currentColor = e.target.id;
    });
});

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    notes.push(new Note(notes.length, noteText.value, currentColor, '7/6/2024'));
    displayNotes();
});

function displayNotes() {
    notesContainer.innerHTML += "<h1>test</h1>";
}