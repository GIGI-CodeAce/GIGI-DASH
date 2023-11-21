// Made by : GIGI-CodeAce / Robert

import { highScore, icons } from './game-script.js'

console.log(`                        &@@@@@@@@@@@@#.
                    @@@@@@@@@@@@@@@@@@@@@@@@@@@%,             
                   %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&  
                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
                  /@@@@@@@@@@@@(#&@@@@@@@@@@@@@@@@@@@@@@@@@@# 
                  @@@@@@@@@@,............... ,@@@@@@@@@@@@@@  
                 .@@@@@@@@@@....................@@@@@@@@@@@&  
                 @@@@@@@@@@,....................&@@@@@@@@@@   
                 @@@@@@@@@@.....................@@@@@@@@@@@   
                &@@@@@@@@@/....................#@@@@@@@@@@,   
                @@@@@@@@@@.....................@@@@@@@@@@@    
               (@@@@@@@@@@....................*@@@@@@@@@@(    
               @@@@@@@@@@@@#..................@@@@@@@@@@@     
              .@@@@@@@@@@@@@@@@@@@@@@@%(,..,@@@@@@@@@@@@&     
              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      
                  ./&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,      
                                ./&@@@@@@@@@@@@@@@@@@@@       
                                               *&@@@@&        `);

document.addEventListener("DOMContentLoaded", function(){
    icons[0].style.display = 'block'
    icons[1].style.display = 'block'
    icons[2].style.display = 'block'
    icons[3].style.display = 'block'
    icons[4].style.display = 'block'
    icons[5].style.display = 'block'

 const tutorialUI = document.querySelector(".tutorial")
 const exitTutorial = document.getElementById("exit-tutorial")
 const aboutBTN = document.querySelector(".about")
 const mainMenu = document.querySelector(".main")

 aboutBTN.addEventListener("click", function(){
    tutorialUI.style.display = "block";
    mainMenu.style.userSelect = "none"
 })
 exitTutorial.addEventListener("click", function(){
    tutorialUI.style.display = "none";
 })
})


const highScoreUI = document.getElementById("high-score")

export let playerIcon = JSON.parse(localStorage.getItem("icon-container")) || 1
export let playerCol = JSON.parse(localStorage.getItem("color-container")) || 1


const iconBackEl = document.querySelector(`.icon-container${playerIcon}`)
if (iconBackEl){
    iconBackEl.style.backgroundColor = "hsl(0, 0%, 40%)"
}

const colorBackEl = document.querySelector(`.color-container${playerCol}`)
if (colorBackEl){
    colorBackEl.style.backgroundColor = "hsl(0, 0%, 40%)"
}

const playerEl = document.querySelector(`.icon${playerIcon}`)


for (let i = 1; i <= 6; i++) {
    const iconEl = document.querySelector(`.icon${i}`)
    iconEl.addEventListener("click", () => {
        switch (i) { 
            case 1:
                playerIcon = 1
                break;
            case 2:
                playerIcon = 2
                break;
            case 3:
                playerIcon = 3
                break;
            case 4:
                playerIcon = 4
                break;
            case 5:
                playerIcon = 5
                break;
            case 6:
                playerIcon = 6
                break;
        }
        iconBackEl.style.backgroundColor = "hsl(0, 0%, 40%)"
        localStorage.setItem("icon-container", playerIcon.toString())
        window.location.href = "./GDmenu"
    });
}

document.addEventListener("DOMContentLoaded", function(){

    for (let i = 1; i <= 6; i++) {
        const colEl = document.getElementById(`col${i}`)
        colEl.addEventListener("click", () => {
                switch (i) {
                    case 1:
                        playerCol = 1
                        playerEl.style.backgroundColor = "hsl(0, 0%, 95%)"
                        break;
                    case 2:
                        playerCol = 2
                        playerEl.style.backgroundColor = "hsl(0, 100%, 60%)"
                        break;
                    case 3:
                        playerCol = 3
                        playerEl.style.backgroundColor = "hsl(226, 100%, 60%)"
                        break;
                    case 4:
                        playerCol = 4
                        playerEl.style.backgroundColor = "hsl(115, 95%, 36%)"
                        break;
                    case 5:
                        playerCol = 5
                        playerEl.style.backgroundColor = "hsl(308, 100%, 80%)"
                        break;
                    case 6:
                        playerCol = 6
                        playerEl.style.backgroundColor = "hsl(60, 100%, 50%)"
                        break;
                }
                localStorage.setItem("color-container", playerCol.toString())
                window.location.href = "./GDmenu"
            });
    }

    const startBTN = document.getElementById("start-btn").addEventListener("click", function(){
        window.location.href = "./GDgame"
    })

    highScoreUI.textContent = `${highScore.toString().padStart(3, '0')}`


})


// Made by : GIGI-CodeAce / Robert