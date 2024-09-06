const verses = [
    "Fürchte dich nicht, denn ich stehe dir bei; hab keine Angst, denn ich bin dein Gott! Ich mache dich stark, ich helfe dir, mit meiner siegreichen Hand beschütze ich dich! - Jesaja 41:10",
    "Er beschützt jeden, der ihm vertraut, doch wer von ihm nichts wissen will, der wird in Finsternis enden. Denn aus eigener Kraft erringt keiner den Sieg. - 1.Samuel 2:9",
    "Aber Gottes Barmherzigkeit ist groß. Wegen unserer Sünden waren wir in Gottes Augen tot. Doch er hat uns so sehr geliebt, dass er uns mit Christus neues Leben schenkte. Denkt immer daran: Diese Rettung verdankt ihr allein der Gnade Gottes. - Epheser 2:4-5",
    "Er gibt mir neue Kraft. Er leitet mich auf sicheren Wegen und macht seinem Namen damit alle Ehre. - Psalm 23:3",
    "Du bleibst nicht für immer zornig, denn Du liebst es, gnädig zu sein! - Micha 7:18",
    "Der Herr ist mein Fels, meine Festung und mein Erretter, mein Gott, meine Zuflucht, mein sicherer Ort. Er ist mein Schild, mein starker Helfer, meine Burg auf unbezwingbarer Höhe. - Psalm 18:3",
    "Darum lebe nicht mehr ich, sondern Christus lebt in mir! Mein vergängliches Leben auf dieser Erde lebe ich im Glauben an Jesus Christus, den Sohn Gottes, der mich geliebt und sein Leben für mich gegeben hat. - Gal 2:20"
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

function showVerse() {
    document.getElementById('loading').style.display = 'none'; // Ladeanimation ausblenden
    document.getElementById('verse').style.display = 'block'; // Vers einblenden
    document.getElementById('verse').innerText = getRandomVerse(); // Zufälligen Vers anzeigen
    document.getElementById('like-container').style.display = 'block'; // Herz-Symbol anzeigen
}

// Ladeanimation 4 Sekunden anzeigen, dann Vers zeigen
setTimeout(showVerse, 4000);

// Blinkende Punkte für die Ladeanimation
let dotIndex = 0;
const dots = ["", ".", "..", "..."];
setInterval(() => {
    document.getElementById('dots').innerText = dots[dotIndex];
    dotIndex = (dotIndex + 1) % dots.length;
}, 500);
