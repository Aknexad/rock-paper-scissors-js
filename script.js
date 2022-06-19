let option = ['Rock', 'Paper', 'Scissors'];

let playerSelect = 'Paper';
let computerSelection = computerPlay(option);

function computerPlay(c) {
  let randumNumber = Math.floor(Math.random() * 3);
  return c[randumNumber];
}

function comparison(ps, cs) {
  if (ps !== cs) {
    if (ps === 'Rock') {
      if (cs == 'Paper') {
        return `Lose ${cs} beats ${ps}`;
      } else {
        return 'Wine';
      }
    }
    if (ps === 'Paper') {
      if (cs == 'Scissors') {
        return `Lose ${cs} beats ${ps}`;
      }
    } else {
      return 'Wine';
    }
    if (ps === 'Scissors') {
      if (cs == 'Rock') {
        return `Lose ${cs} beats ${ps}`;
      }
    } else {
      return 'Wine';
    }
  } else {
    return 'Drow';
  }
}

console.log(`player  ${playerSelect}`);
console.log(`computer ${computerSelection}`);
console.log(
  `reult ${comparison(playerSelect, computerSelection)}`
);
