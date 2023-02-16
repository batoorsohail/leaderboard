import { uploadPoints } from './api.js';
import refreshPoints from './leaderboard.js';

const addButton = document.querySelector('.add-btn');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const refresherBtn = document.querySelector('.refresh-btn')

addButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  if (nameInput.value.length > 0 && scoreInput.value.length > 0) {
    await uploadPoints(name, score);
    refreshPoints();
  }
});

refresherBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refreshPoints();
});