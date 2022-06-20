// let playerSelect = prompt('chose');
let player = 0;
let computer = 0;

function computerPlay() {
  const option = ['Rock', 'Paper', 'Scissors'];

  return option[Math.floor(Math.random() * 3)];
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
      } else {
        return 'Wine';
      }
    }
    if (ps === 'Scissors') {
      if (cs == 'Rock') {
        return `Lose ${cs} beats ${ps}`;
      } else {
        return 'Wine';
      }
    }
  } else {
    return 'Drow';
  }
}

function Game(result) {
  if (result !== 'Drow') {
    if (result === 'Wine') {
      player++;
    } else {
      computer = computer + 1;
    }
  }

  console.log(result);
  console.log(`Computer ${computer}`);
  console.log(`Player ${player}`);
}

function Score(player, computer) {
  if (player > computer) {
    console.log(`Your Score ${player}`);
    console.log(`Coputer Score ${computer}`);
    console.log('You Win the Game ');
  } else if (computer > player) {
    console.log(`Your Score ${player}`);
    console.log(`Coputer Score ${computer}`);
    console.log('You Lose the Game ');
  } else {
    console.log('play agen ');
  }
}

for (let i = 0; i < 5; i++) {
  let playerSelect = 'Paper';
  Game(comparison(playerSelect, computerPlay()));
  console.log('//////////////');
}

Score(player, computer);
