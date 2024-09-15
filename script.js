const verses = [
    "Fürchte dich nicht, denn ich stehe dir bei; hab keine Angst, denn ich bin dein Gott! - Jesaja 41:10",
    "Er beschützt jeden, der ihm vertraut. - 1. Samuel 2:9",
    "Aber Gottes Barmherzigkeit ist groß. - Epheser 2:4-5",
    "Er gibt mir neue Kraft. - Psalm 23:3",
    "Du bleibst nicht für immer zornig. - Micha 7:18",
    "Der Herr ist mein Fels. - Psalm 18:3",
    "Darum lebe nicht mehr ich, sondern Christus lebt in mir! - Galater 2:20",
    "Vertraue von ganzem Herzen auf den HERRN und verlass dich nicht auf deinen Verstand, sondern denke an ihn auf allen deinen Wegen, so wird er dich recht führen. - Sprüche 3:5-6",
    "Darum sorgt euch nicht für den morgigen Tag, denn der morgige Tag wird für sich selbst sorgen. Es ist genug, dass jeder Tag seine eigene Plage hat. - Matthäus 6:34",
    "Was wollen wir nun hierzu sagen? Ist Gott für uns, wer kann gegen uns sein? - Römer 8:31",
    "Gott aber beweist uns seine große Liebe gerade dadurch, dass Christus für uns starb, als wir noch Sünder waren. - Römer 5:8",
    "Jesus antwortete ihm: ,Du sollst den Herrn, deinen Gott, lieben von ganzem Herzen, mit ganzer Hingabe und mit deinem ganzen Verstand.' - Matthäus 22:37",
    "Denn wer seinen Mitmenschen liebt, tut ihm nichts Böses. So wird durch die Liebe das ganze Gesetz erfüllt. - Römer 13:10",
    "Denn Gott hat uns nicht einen Geist der Furchtsamkeit gegeben, sondern der Kraft und der Liebe und der Zucht. - 2. Timotheus 1:7",
    "Ihr seid von Gott auserwählt und seine geliebten Kinder, die zu ihm gehören. Darum soll jetzt herzliches Mitgefühl eurer Leben bestimmen, ebenso wie Güte, Bescheidenheit, Nachsicht und Geduld. - Kolosser 3:12",
    "Denn ich allein weiß, was ich mit euch vorhabe: Ich, der HERR, habe Frieden für euch im Sinn und will euch aus dem Leid befreien. Ich gebe euch wieder Zukunft und Hoffnung. Mein Wort gilt! - Jeremia 29:11",
    "Deshalb wünsche ich für euch alle, dass Gott, der diese Hoffnung schenkt, euch in eurem Glauben mit großer Freude und vollkommenem Frieden erfüllt, damit eure Hoffnung durch die Kraft des Heiligen Geistes wachse. - Römer 15:13",
    "Seid fröhlich in der Hoffnung darauf, dass Gott seine Zusagen erfüllt. Bleibt standhaft, wenn ihr verfolgt werdet. Und lasst euch durch nichts vom Gebet abbringen. - Römer 12:12",
    "Liebt den HERRN, alle, die ihr zu ihm gehört! Wer treu zu ihm hält, steht unter seinem Schutz, doch wer selbstgerecht ist, dem zahlt er es doppelt heim. - Psalm 31:24",
    "Der HERR aber beschützt alle, die ihm mit Ehrfurcht begegnen und die auf seine Gnade vertrauen. - Psalm 33:18",
    "Die Güte des Herrn hat kein Ende, sein Erbarmen hört niemals auf, es ist jeden Morgen neu! Groß ist deine Treue, o Herr! Denn der Herr ist gut zu dem, der ihm vertraut und ihn von ganzem Herzen sucht. - Klagelieder 3:23-25",
    "Wenn aber rechtschaffene Menschen zu ihm rufen, hört er sie und rettet sie aus jedem Not. - Psalm 34:18",
    "Ladet alle eure Sorgen bei Gott ab, denn er sorgt für euch. - 1. Petrus 5:7",
    "Kommt alle her zu mir, die ihr euch abmüht und unter eurer Last leidet! Ich werde euch Ruhe geben. - Matthäus 11:28",
    "Macht euch keine Sorgen! Ihr dürft in jeder Lage zu Gott beten. Sagt ihm, was euch fehlt, und dankt ihm! - Philipper 4:6",
    "Sorgen drücken einen Menschen nieder, aber freundliche Worte richten ihn wieder auf. - Sprüche 12:25",
    "Ja, ich sage es noch einmal: Sei mutig und entschlossen! Lass dich nicht einschüchtern und hab keine Angst! Denn ich, der HERR, dein Gott, stehe dir bei, wohin du auch gehst.« - Josua 1:9",
    "Das eine aber wissen wir: Wer Gott liebt, dem dient alles, was geschieht, zum Guten. Dies gilt für alle, die Gott nach seinem Plan und Willen zum neuen Leben gewählt hat. - Römer 8:28",
    "Du zeigst mir den Weg, der zum Leben führt. Du beschenkst mich mit Freude, denn du bist bei mir; Aus deiner Hand empfing ich unendliches Glück. - Psalm 16:11",
    "Hört niemals darauf, zu beten. - 1. Thessalonicher 5:17",
    "Bisher habt ihr euch nicht auf mich berufen, wenn ihr etwas von Gott erbeten habt. Bittet ihn, und er wird es euch geben. Dann wird eure Freude vollkommen sein.« - Johannes 16:24",
    "Der Dieb kommt, um zu stehlen, zu schlachten und zu vernichten. Ich aber bringe Leben – und dies im Überfluss. - Johannes 10:10",
    "Als ich beim HERRN Hilfe suchte, erhörte er mich und befreite mich aus aller Angst. - Psalm 34: 5",
    "Und so lautete mein Gebot: Liebt einander, wie ich euch geliebt habe. - Johannes 15:12",
    "Nachdem wir durch den Glauben von unserer Schuld freigesprochen sind, haben wir Frieden mit Gott durch unseren Herrn Jesus Christus. - Römer 5:1",
    "Ich bin der Weinstock, und ihr seid die Reben. Wer mit mir verbunden bleibt, so wie ich mit ihm, der trägt viel Frucht. Denn ohne mich könnt ihr nichts ausrichten. - Johannes‬ ‭15‬:‭5‬",
    "Setzt euch zuerst für Gottes Reich ein und dafür, dass sein Wille geschieht. Dann wird er euch mit allem anderen versorgen. - Matthäus‬ ‭6‬:‭33",
    "Seht euch die Vögel an! Sie säen nichts, sie ernten nichts und sammeln auch keine Vorräte. Euer Vater im Himmel versorgt sie. Meint ihr nicht, dass ihr ihm viel wichtiger seid? - Matthäus‬ ‭6‬:‭26",
    "Haltet an der Botschaft fest, die ihr von mir gehört und angenommen habt. Richtet euch nach dem, was ich euch gelehrt habe, und lebt nach meinem Vorbild. Dann wird Gott, von dem aller Friede kommt, bei euch sein. - Philipper‬ ‭4‬:‭9‬",
    "Bleibt standhaft, dann gewinnt ihr das ewige Leben.« - Lukas‬ ‭21‬:‭19‬",
    "„Befiehl dem Herrn deinen Weg, und vertraue auf ihn, so wird er es vollbringen. - Psalmen‬ ‭37‬:‭5‬",
    "»Der Gerechte aber wird aus Glaubenleben«; doch: »Wenn er feige zurückweicht, so wird meine Seele keinWohlgefallen an ihm haben«. Wir aber gehören nicht zu denen, die feige zurückweichen zum Verderben, sondern zu denen, die glauben zur Errettung der Seele. - Hebräerbrief‬ ‭10‬:‭38‬-‭39‬",
    "Bevor du reagierst, nimmm dir einen Moment, um dich zu beruhigen. Handle nicht impulsiv aus deinen Emotionen heraus.                                           >Geduld zu haben ist besser, als ein Held zu sein; und sich selbst beherrschen ist besser, als Städte zu erobern!< - Sprüche 16:32"


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
