<h1 align="center" id="title">GIGI-DASH</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/GIGIsOtherStuff/mainWebMedia/main/AppImages/myProjectsImgs/GDlogoNew.png"
   alt="project-image" style="width: 45%; height: 300px">
</p>

<p id="description">
GIGI-DASH, the adventure that will test your reflexes and push your skills to the limit!
Pushing through deadly spikes, high speeds and theme colored seasons.
</p>

<h2 align="center">Play here</h2>

<div align="center">
  <a href="https://gigi-codeace.github.io/GIGI-DASH/GDmenu">github.io/GIGI-DASH/Menu</a>
</div>

<h2 align="center">🧐 Features</h2>

<h4>Here're some of the project's best features</h4>

*   6 tones of color for icons
*   6 icons to choose from
*   Many Colored seasons going though the game
*   Set time records for most game score
*   Killing spike script & more:

```javascript
// ...
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
              }else {
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
// ...
```
<h2 align="center">Project Screenshots:</h2>
<div align="center">
  <h3>Icons and colors</h3>
 <img src="/Media/mdMedia/icons.png" alt="project-screenshot"  style="width: 700px; height: 400px">
  <h3>Game interface</h3>
  <img src="/Media/mdMedia/game.png" alt="project-screenshot" style="width: 100%; height: 400px">
</div><br></br>

[![Portfolio](https://img.shields.io/badge/Portfolio-62b1ff?style=for-the-badge&logo=web&logoColor=white)](https://www.gigicodeace.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-3e3eff?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dobre-robert-03653b331/)
[![GitHub](https://img.shields.io/badge/GitHub-2f2f2f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GIGI-CodeAce)
[![CSS Battles](https://img.shields.io/badge/CSS%20Battles-ff6e96?style=for-the-badge&logo=css3&logoColor=white)](https://cssbattle.dev/player/gigi)

  <b></b>
   <h4>~GIGI <code>Dore Robert</code></h4>
</footer>