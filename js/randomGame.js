document.getElementById('randomGame').addEventListener('click', goToRandomGame);
const gameArr = ['./ac/ac.html', './BOTW/BOTW.HTML', './EldenRing/EldenRing.Html', "./Adventure/Adventure.html", "./Banjo/Banjo.html", "./elderscrolls/elderscrolls3.html", 
"./fallout3/fallout3.html", "./gta3/gta3.html", "./Mario64/Mario64.html", "./Minecraft/Minecraft.html", "./NoMansSky/NoMansSky.html", "./OcarinaOfTime/OcarinaOfTime.html", 
"./rdr/rdr.html", "./rdr2/rdr2.html", "./SotN/SotN.html", "./Spiderman/Spiderman.html", "./starfield/starfield.html", "./SuperMetroid/SuperMetroid.html", "./TOTK/TOTK.html", 
"./Witcher3/Witcher3.html", "./Zelda/Zelda.HTML", "./gta5/gta5.html"];
// TODO: ADD MORE GAMES
            
function goToRandomGame() {
    window.location.href = gameArr[Math.floor(Math.random() * gameArr.length)];
}
