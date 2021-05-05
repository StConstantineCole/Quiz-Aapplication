const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScore");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//local storage stores in key value pairs so it needs to be converted into a string
const highScores = JSON.parse(localStorage.getItem('highScore')) || [];
MAX_HIGH_SCORES = 5;
console.log(highScores);
//convert into ana array using JSON.parse
finalScore.innerHTML = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e) => {
    console.log("save")
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100), //mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/')
    console.log(highScores);
};