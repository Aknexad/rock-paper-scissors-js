let option = ['Rock', 'Paper', 'Scissors'];

let playerSelect = 'Paper';
let computerSelection = computerPlay(option);

function computerPlay(c) {
  let randumNumber = Math.floor(Math.random() * 3);
  return c[randumNumber];
}

console.log(`player  ${playerSelect}`);
console.log(`computer ${computerSelection}`);
