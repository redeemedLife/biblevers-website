const verses = [
    "Fürchte dich nicht, denn ich stehe dir bei; hab keine Angst, denn ich bin dein Gott! - Jesaja 41:10",
    "Er beschützt jeden, der ihm vertraut. - 1. Samuel 2:9",
    "Aber Gottes Barmherzigkeit ist groß. - Epheser 2:4-5",
    "Er gibt mir neue Kraft. - Psalm 23:3",
    "Du bleibst nicht für immer zornig. - Micha 7:18",
    "Der Herr ist mein Fels. - Psalm 18:3",
    "Darum lebe nicht mehr ich, sondern Christus lebt in mir! - Galater 2:20",
    "Vertraue von ganzem Herzen auf den HERRN und verlass dich nicht auf deinen Verstand, sondern denke an ihn auf allen deinen Wegen, so wird er dich recht führen. - Sprüche 3:5-6"
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

function showVerse() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('verse').style.display = 'block';
    document.getElementById('verse').innerText = getRandomVerse();
}

// Ladeanimation 3 Sekunden anzeigen, dann Vers zeigen
setTimeout(showVerse, 3000);

// Blinkende Punkte
let dotIndex = 0;
const dots = ["", ".", "..", "..."];
setInterval(() => {
    document.getElementById('dots').innerText = dots[dotIndex];
    dotIndex = (dotIndex + 1) % dots.length;
}, 500);
