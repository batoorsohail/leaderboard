const addButton = document.querySelector('.add');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');

addButton.addEventListener('click', () => {
  if (nameInput.value.length > 0 && scoreInput.value.length > 0) {
    const yourScores = document.querySelector('.board');
    yourScores.innerHTML += `
      <li class="details">
        <p>${nameInput.value}: ${scoreInput.value}</p>
      </li>
    `;
    nameInput.value = '';
    scoreInput.value = '';
  }
});

export default addButton();