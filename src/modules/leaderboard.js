import { getPoints } from './api.js';

const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const scoreContainer = document.querySelector('.score-container');

const refreshPoints = async () => {
  const scores = await getPoints();

  scoreContainer.innerHTML = '';

  scores.result.forEach((score) => {
    const pointsWrapper = document.createElement('li');
    pointsWrapper.classList.add('details');
    pointsWrapper.innerHTML = ` <i class="fa-solid fa-medal"></i> ${score.user}: ${score.score}`;
    scoreContainer.appendChild(pointsWrapper);
  });

  nameInput.value = '';
  scoreInput.value = '';
};

export default refreshPoints;