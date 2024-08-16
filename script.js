const bibleVerses = [
    "Denn ich weiß, was für Gedanken ich über euch habe, spricht der Herr: Gedanken des Friedens und nicht des Leides, dass ich euch gebe Zukunft und Hoffnung. - Jeremia 29:11",
    "Der Herr ist mein Hirte, mir wird nichts mangeln. - Psalm 23:1",
    "Alle Dinge sind möglich dem, der da glaubt. - Markus 9:23",
    "Ich vermag alles durch den, der mich mächtig macht, Christus. - Philipper 4:13",
    "Denn Gott hat uns nicht gegeben den Geist der Furcht, sondern der Kraft und der Liebe und der Besonnenheit. - 2. Timotheus 1:7"
];

function generateVerse() {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    document.getElementById("bible-verse").innerText = bibleVerses[randomIndex];
}

// Generiere einen Vers beim Laden der Seite
generateVerse();
