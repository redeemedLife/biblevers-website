const verses = [
    "Psalm 23:1 - Der Herr ist mein Hirte; mir wird nichts mangeln.",
    "Johannes 3:16 - Denn so sehr hat Gott die Welt geliebt, dass er seinen einzigen Sohn gab.",
    "Philipper 4:13 - Ich vermag alles durch den, der mich mächtig macht, Christus.",
    "1. Korinther 13:4 - Die Liebe ist langmütig, die Liebe ist gütig.",
    "Jeremia 29:11 - Denn ich weiß, welche Gedanken ich über euch habe, spricht der Herr."
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

document.getElementById('verse').innerText = getRandomVerse();
