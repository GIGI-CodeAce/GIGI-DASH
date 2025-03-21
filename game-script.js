// Made by : GIGI-CodeAce / Robert

import { playerIcon , playerCol } from './menu-script.js';

export let highScore = JSON.parse(localStorage.getItem("high-score")) || 0;
export const icons = document.querySelectorAll(".icon1, .icon2, .icon3, .icon4, .icon5, .icon6");


document.addEventListener("DOMContentLoaded", function() {

  const playerEl = document.querySelector(`.icon${playerIcon}`);

function hideOthers(){
  icons.forEach(icon => (icon.style.display = 'none'))
 }

  const tutorialUI = document.querySelector(".tutorial")
  const exitTutorial = document.getElementById("exit-tutorial")
  const aboutBTN = document.querySelector(".about")
  const iconColors = ['hsl(0, 0%, 95%)', 'hsl(0, 100%, 60%)', 'hsl(226, 100%, 60%)',
                   'hsl(115, 95%, 36%)', 'hsl(308, 100%, 80%)', 'hsl(60, 100%, 50%)']

  if(playerIcon){
    hideOthers()
    icons[playerIcon-1].style.display = 'block';
   }
   if(playerCol){
    playerEl.style.backgroundColor = iconColors[playerCol-1];
   }
 

  aboutBTN.addEventListener("click", function(){
    validJump = false
     tutorialUI.style.display = "block";
  })
  exitTutorial.addEventListener("click", function(){
     tutorialUI.style.display = "none";
     validJump = true
  })

  let score = JSON.parse(localStorage.getItem("score-ui")) || 0;
  const hitboxUI = document.querySelector(".hitbox")
  const skinsUI = document.querySelector(".skins")
  const groundUI = document.querySelector(".ground")
  const gameFrame = document.querySelector(".game-frame")


  const spike = document.querySelector(".spike")
  
  const scoreUI = document.getElementById("score-ui")
  const cooldownUI = document.getElementById("cooldown")
  const franQuote = document.getElementById("france")
  const menuDirect = document.getElementById("menu-redirect")
  const refreshDirect = document.getElementById("refresh-redirect")

  
  const targetPosition = 1160
  let validJump = true
  let isAlive = false
  let started = false
  let movingRight = true
  let count = 3
  let playerTop = 0
  let currentPosition = 0
  let timerInterval
  let CPadd = 0

  const Titles = ['Défunte', 'Clair De Lune', 'Le Cygne', 'Petite Musique', 'Du Carnaval', 'Boléro',
    'Quatre Saisons', 'Für Eliza', 'Berceuse', 'Nessun Dorma', 'Gymnopédies', 'La Flûte Enchantée', 'La Mer',
  ];

const randTitle = getRandomItemFromArray(Titles);

function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

  franQuote.textContent = randTitle

  document.body.addEventListener("touchstart", playerJump);
  
  function handleKeyPress(event) {
    if (event.keyCode === 32 || event.keyCode === 38) {
      playerJump()
    }
  }
  
  function handleClick() {
    playerJump()
  }

  document.addEventListener('keydown', function(event) {
      if (event.key === 'r' || event.key === 'R') {
        window.location.href = "./GDgame";
      }
      if (event.key === 'e' || event.key === 'E') {
        window.location.href = "./GDmenu";
      }
});


  document.addEventListener("keydown", handleKeyPress)
  document.addEventListener("mousedown", handleClick)

  function counter(){
    count--
    if (cooldownUI){
      cooldownUI.textContent = `(${count})`
    }
  
    if (count == 0){
      clearTimeout(timerInterval)
      if (cooldownUI){
        cooldownUI.textContent = "Started"
      }
      isAlive = true
      started = true
      moveSpike()
    }
    else{
      timerInterval =  setTimeout(counter, 1000)
    }
  
  }
  counter()
  
  
  function playerJump() {
    if (validJump && isAlive) {
        validJump = false;
        playerTop -= 60;


        const translateYValue = `${playerTop}px`;

        hitboxUI.style.transition = "transform 0.06s ease";
        skinsUI.style.transition = "transform 0.06s ease";

        hitboxUI.style.transform = `translateY(${translateYValue})`;
        skinsUI.style.transform = `translateY(${translateYValue})`;


        setTimeout(() => {
            playerTop += 60;
            const resetTranslateYValue = "0"; 
            hitboxUI.style.transform = `translateY(${resetTranslateYValue})`;
            skinsUI.style.transform = `translateY(${resetTranslateYValue})`;

            setTimeout(() => {
                validJump = true;
            }, 22);
        }, 350);
    }
}
  
  
  function moveSpike() {
    currentPosition = CPadd + currentPosition
    if (isAlive) {
      if (movingRight) {
        currentPosition += 10;
        if (spike){
        spike.style.transform = `translateX(-${currentPosition}px)`;
        }
        } else {
        movingRight = false;
      }
      if (currentPosition >= targetPosition) {
        score++
        localStorage.setItem("score-ui", score.toString());
        scoreUI.textContent = `${score.toString().padStart(3, '0')}`

        changeScore()
        currentPosition = 0;
                  spike.style.transform = `translateX(-${currentPosition}px)`;
              } else {
        movingRight = true;
      }

      if (score > highScore) {
        highScore = score;
        localStorage.setItem("high-score", highScore.toString()); 
      }
  
      checkCollision()
      requestAnimationFrame(moveSpike);
    }
  }
  
  function changeScore() {

if (score % 5 === 0 && score !== 80 && score <= 80) {
        CPadd += 1.5;
    }

    if (score % 10 === 0) {
        scoreUI.style.transition = "color 0.5s ease";
        scoreUI.style.color = "hsl(120, 100%, 35%)";
        setTimeout(() => {
            scoreUI.style.color = "whitesmoke";
        }, 500);

    }
}


function colorSwitch(backCol,spikeCol,frameCol){
  groundUI.style.backgroundColor = backCol;
  spike.style.backgroundColor = spikeCol;
  gameFrame.style.backgroundColor = frameCol;
}
let seconds = 0;

const themes = [
  { background: "hsl(84, 100%, 15%)", spike: "hsl(84, 100%, 30%)", frame: "hsl(84, 100%, 10%)" },       // Green
  { background: "hsl(209, 100%, 34%)", spike: "hsl(209, 100%, 63%)", frame: "hsl(209, 100%, 40%)" },    // Blue
  { background: "hsl(14, 100%, 30%)", spike: "hsl(14, 100%, 50%)", frame: "hsl(14, 100%, 35%)" },       // Red
  { background: "hsl(0, 0%, 74%)", spike: "hsl(0, 0%, 60%)", frame: "hsl(0, 0%, 80%)" },                // White
  { background: "hsl(295, 100%, 30%)", spike: "hsl(295, 100%, 55%)", frame: "hsl(295, 100%, 35%)" }     // Purple
];

themeChanges()

function themeChanges(){
  if (isAlive){
    seconds += 1
    if (seconds === 18){
      seconds = 0
      let RandTheme = Math.floor(Math.random() * themes.length);
      if(RandTheme){
        const pikedTheme = themes[RandTheme]
        colorSwitch(pikedTheme.background,pikedTheme.spike,pikedTheme.frame)
      }
  
          groundUI.style.transition = "background-color 5s ease";
          spike.style.transition = "background-color 1s ease";
          gameFrame.style.transition = "background-color 5s ease";
        }
  }

}
setInterval(themeChanges, 1000);

function checkCollision() {
  const playerRect = hitboxUI.getBoundingClientRect();
  const spikeRect = spike.getBoundingClientRect();

  if (
      Math.floor(playerRect.right) > Math.floor(spikeRect.left) &&
      Math.floor(playerRect.left) < Math.floor(spikeRect.right) &&
      Math.floor(playerRect.bottom) > Math.floor(spikeRect.top) &&
      Math.floor(playerRect.top) < Math.floor(spikeRect.bottom)
  ) {
      endGame();
  }
}

  if (refreshDirect){
    refreshDirect.addEventListener("click", function(){
      window.location.href = "./GDgame";
    })
  }
  if (menuDirect){
    menuDirect.addEventListener("click", function(){
      window.location.href = "./GDmenu";
    })
  }
    
    function endGame() {
    isAlive = false;

    score = 0;
    
    localStorage.setItem("score-ui", "0");

    menuDirect.style.display = "inline-block"
    refreshDirect.style.display = "inline-block"
    spike.style.backgroundColor = "hsl(0, 100%, 70%)";
  
    scoreUI.style.transition = "color 0.3s ease";
    scoreUI.style.color = "hsl(216, 100%, 65%)";
  
    cooldownUI.textContent = "Game Over";
    clearTimeout(timerInterval);


  }
  

});

// Made by : GIGI-CodeAce / Robert