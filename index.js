let scoreEl = document.getElementById("score-el")
let score2El = document.getElementById("score2-el")
let timerEl = document.getElementById("timer-el")
let score = 0 
let scores = 0 


function addone() { 
    score += 1 
    scoreEl.textContent = score
    
}

function addtwo() { 
    score += 2 
    scoreEl.textContent = score
    
}

function addthree() { 
    score += 3
    scoreEl.textContent = score
    
}


function addone1() { 
    scores += 1 
    score2El.textContent = scores
    
}

function addtwo1() { 
    scores += 2 
    score2El.textContent = scores
    
}

function addthree1() { 
    scores += 3
    score2El.textContent = scores

}


function reset() {
    score = 0 
    scores = 0
    score2El.textContent = scores
    scoreEl.textContent = score
}



const startingMinutes = 12;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown,1000);

function updateCountdown(){
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  
  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
