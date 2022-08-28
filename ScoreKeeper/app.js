const img = document.querySelector('img');
img.style.maxHeight = '200px';

const h2 = document.querySelector('h1');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScore = document.querySelector('#scoreLimit');

let oneScore = 0;
let twoScore = 0;
let isGameOver = false;
let scoreLimit = parseInt(winningScore.value);

one.addEventListener('click', function(e){
    if(!isGameOver){
        oneScore++;
        if(oneScore === scoreLimit){
            isGameOver = true;
            one.disabled = true;
            two.disabled = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
        }
        p1Display.textContent = oneScore;
    }
    // h2.innerText = `${oneScore} to ${twoScore}`;
})

two.addEventListener('click', function(e){
    if(!isGameOver){
        twoScore++;
        if(twoScore === scoreLimit){
            isGameOver = true;
            one.disabled = true;
            two.disabled = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
        }
        p2Display.textContent = twoScore;
    }
    // h2.innerText = `${oneScore} to ${twoScore}`;
})

winningScore.addEventListener('change', function(){
    scoreLimit = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    oneScore = 0;
    twoScore = 0;
    p1Display.textContent = oneScore;
    p2Display.textContent = twoScore;
    isGameOver = false;
    one.disabled = false;
    two.disabled = false;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
}

