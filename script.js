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
  document.querySelector('#round').innerText = result;
}

function Score(player, computer) {
  if (player > computer) {
    document.querySelector('h2').innerText =
      'You Win the Game';
  } else if (computer > player) {
    document.querySelector('h2').innerText =
      'You Lose the Game';
  } else {
    document.querySelector('h2').innerText = 'Equl';
  }
}

let btn = document.querySelectorAll('.rps');

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

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {

   player = 0;
   computer = 0;
  
  gameRound = 0;
  document.querySelector('#player').innerText = 0;
  document.querySelector('#computer').innerText = 0;
  document.querySelector('#round').innerText = ' ';
  document.querySelector('h2').innerText = '';
});
