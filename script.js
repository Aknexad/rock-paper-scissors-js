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
        return 'Winner';
      }
    }
    if (ps === 'Paper') {
      if (cs == 'Scissors') {
        return `Lose ${cs} beats ${ps}`;
      } else {
        return 'Winner';
      }
    }
    if (ps === 'Scissors') {
      if (cs == 'Rock') {
        return `Lose ${cs} beats ${ps}`;
      } else {
        return 'Winner';
      }
    }
  } else {
    return 'Equal';
  }
}

function Game(result) {
  if (result !== 'Equal') {
    if (result === 'Winner') {
      player++;
    } else {
      computer++;
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

let btn = document.querySelectorAll('button');

btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    let = playerSelect = e.target.innerHTML;

    Game(comparison(playerSelect, computerPlay()));
  });
});

// for (let i = 0; i < 5; i++) {
//   let playerSelect = '';
//   Game(comparison(playerSelect, computerPlay()));
//   console.log('//////////////');
// }

Score(player, computer);
