const random = Math.floor(Math.random() * 5) + 1;
const number = parseInt(prompt('Guess a number between 1 and 5'));

alert(random === number ? 'Correct!' : `Wrong guess. The number was ${random}`);