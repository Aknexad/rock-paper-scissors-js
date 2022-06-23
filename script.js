function computerPlay() {
  const option = ['Rock', 'Paper', 'Scissors'];

  return option[Math.floor(Math.random() * 3)];
}

function Comparison(ps, cs) {
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

let player = 0;
let computer = 0;

function Game(result) {
  if (result !== 'Equal') {
    if (result === 'Winner') {
      player++;
    } else {
      computer++;
    }
  }

  document.querySelector('#player').innerText = player;
  document.querySelector('#computer').innerText = computer;
  document.querySelector('h3').innerText = result;
}

function Score(player, computer) {
  if (player > computer) {
    document.querySelector('h2').innerText =
      'You Win the Game';
  } else if (computer > player) {
    document.querySelector('h2').innerText =
      'You Lose the Game';
  } else {
    console.log('play agen ');
  }
}

let btn = document.querySelectorAll('button');

let gameRound = 0;
btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    gameRound++;
    if (gameRound <= 4) {
      let = playerSelect = e.target.innerHTML;
      Game(Comparison(playerSelect, computerPlay()));
    } else {
      Score(player, computer);
    }
  });
});
