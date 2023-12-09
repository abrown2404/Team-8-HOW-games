document.getElementById('randomGame').addEventListener('click', goToRandomGame);
const gameArr = ['./ac/ac.html', './BOTW/BOTW.HTML', './EldenRing/EldenRing.Html'];
// TODO: ADD MORE GAMES
            
function goToRandomGame() {
    window.location.href = gameArr[Math.floor(Math.random() * gameArr.length)];
}
