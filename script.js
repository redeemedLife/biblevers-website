// Array von Bibelversen
const verses = [
    "Psalm 23,1: Der Herr ist mein Hirte; mir wird nichts mangeln.",
    "Johannes 3,16: Denn also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.",
    "Philipper 4,13: Ich vermag alles durch den, der mich kräftigt.",
    "Jeremia 29,11: Denn ich weiß wohl, welche Gedanken ich über euch denke, spricht der Herr, Gedanken des Friedens und nicht des Unheils, um euch eine Zukunft und eine Hoffnung zu geben.",
    "Matthäus 5,14: Ihr seid das Licht der Welt. Eine Stadt, die auf einem Berge liegt, kann nicht verborgen bleiben."
];

// Funktion, um einen zufälligen Vers anzuzeigen
function displayRandomVerse() {
    // Wähle einen zufälligen Index
    const randomIndex = Math.floor(Math.random() * verses.length);
    // Hole den Paragraphen mit der ID 'verse'
    const verseElement = document.getElementById('verse');
    // Setze den Text des Paragraphen auf den zufälligen Vers
    verseElement.textContent = verses[randomIndex];
}

// Führe die Funktion aus, wenn die Seite geladen wird
window.onload = displayRandomVerse;
