// Firebase initialisieren (mit deiner SDK-Konfiguration)
const firebaseConfig = {
    apiKey: "AIzaSyBGHHNFPYgW5brQU2EvZz_RPGuc-NI3bJc",
    authDomain: "redeemed-life.firebaseapp.com",
    databaseURL: "https://redeemed-life-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "redeemed-life",
    storageBucket: "redeemed-life.appspot.com",
    messagingSenderId: "466136527884",
    appId: "1:466136527884:web:58b5c25453687f6b02ea29",
    measurementId: "G-CPM9VWYVQG"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Verweis auf die Realtime Database
const likeCountRef = database.ref('likes');

// Funktion zum Abrufen der aktuellen Like-Zahl
function getLikeCount() {
    likeCountRef.on('value', (snapshot) => {
        const likeCount = snapshot.val() || 0;
        document.getElementById('like-count').innerText = likeCount;
    });
}

// Funktion zum Erhöhen der Like-Zahl
function like() {
    likeCountRef.transaction((currentLikes) => {
        return (currentLikes || 0) + 1;
    });
}

// Event-Listener für den Like-Button
document.getElementById('like-button').addEventListener('click', like);

// Hol die aktuelle Anzahl der Likes beim Laden der Seite
getLikeCount();

// Array der Verse
const verses = [
    "Fürchte dich nicht, denn ich stehe dir bei; hab keine Angst, denn ich bin dein Gott! Ich mache dich stark, ich helfe dir, mit meiner siegreichen Hand beschütze ich dich! - Jesaja 41:10",
    "Er beschützt jeden, der ihm vertraut, doch wer von ihm nichts wissen will, der wird in Finsternis enden. Denn aus eigener Kraft erringt keiner den Sieg. - 1.Samuel 2:9",
    "Aber Gottes Barmherzigkeit ist groß. Wegen unserer Sünden waren wir in Gottes Augen tot. Doch er hat uns so sehr geliebt, dass er uns mit Christus neues Leben schenkte. Denkt immer daran: Diese Rettung verdankt ihr allein der Gnade Gottes. - Epheser 2:4-5",
    "Er gibt mir neue Kraft. Er leitet mich auf sicheren Wegen und macht seinem Namen damit alle Ehre. - Psalm 23:3",
    "Du bleibst nicht für immer zornig, denn Du liebst es, gnädig zu sein! - Micha 7:18",
    "Der Herr ist mein Fels, meine Festung und mein Erretter, mein Gott, meine Zuflucht, mein sicherer Ort. Er ist mein Schild, mein starker Helfer, meine Burg auf unbezwingbarer Höhe. - Psalm 18:3",
    "Darum lebe nicht mehr ich, sondern Christus lebt in mir! Mein vergängliches Leben auf dieser Erde lebe ich im Glauben an Jesus Christus, den Sohn Gottes, der mich geliebt und sein Leben für mich gegeben hat. - Gal 2:20"
];

// Zufälligen Vers holen
function getRandomVerse() {
    console.log("Zufälliger Vers wird geholt");
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

// Ladeanimation für die Punkte
function animateDots() {
    console.log("Punkte Animation gestartet");
    let dots = '';
    let count = 0;
    const dotsElement = document.getElementById('dots');
    
    setInterval(() => {
        count = (count + 1) % 4;
        dots = '.'.repeat(count);
        dotsElement.innerText = dots;
    }, 500); // Alle 500ms werden die Punkte aktualisiert
}

// Zeige den zufälligen Vers nach der Ladeanimation an
function showVerse() {
    console.log("Vers wird angezeigt");
    document.getElementById('loading').style.display = 'none';
    document.getElementById('verse').style.display = 'block';
    document.getElementById('like-container').style.display = 'flex'; // Zeige den Like-Button
    document.getElementById('verse').innerText = getRandomVerse();
}

// Ladeanimation starten und Vers nach 4 Sekunden anzeigen
console.log("Ladeanimation gestartet");
setTimeout(showVerse, 4000);
animateDots(); // Animation der Punkte starten
