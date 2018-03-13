console.log('hi');

var languages = [
    var espanol =
    {
        "a": "un",
        "an": "un",
        "the": "el",
        "and": "y",
        "happy": "feliz",
        "holiday": "fiesta",
        "holidays": "fiestas",
        "new": "nuevo",
        "year": "ano",
        "christmas": "navidad",
        "xmas": "navidad",
        "season": "temporada",
        "seasons": "temporadas",
        "greeting": "saludo",
        "greetings": "saludos",
        "hanukkah": "hanukkah",
        "warm": "calentar",
        "wishes": "deseos",
        "kwanzaa": "kwanzaa"
    },
    var deutsche =
    {
        "a": "ein",
        "an": "ein",
        "the": "das",
        "and": "und",
        "happy": "glücklich",
        "holiday": "urlaub",
        "holidays": "ferien",
        "new": "neu",
        "year": "jahr",
        "christmas": "weihnachten",
        "xmas": "weihnachten",
        "season": "jahreszeit",
        "seasons": "jahreszeiten",
        "greeting": "Gruß",
        "greetings": "Gruße",
        "hanukkah": "chanukka",
        "warm": "warm",
        "wishes": "wunsch",
        "kwanzaa": "kwanzaa"
    },
    var klingon =
    {
        "a": ".",
        "an": "ghah",
        "the": ".",
        "and": "je",
        "happy": "quch",
        "holiday": "ql'lop",
        "holidays": "ql'lop",
        "new": "chu'",
        "year": "dis",
        "christmas": "christmas",
        "xmas": "christmas",
        "season": "maqtagh",
        "seasons": "maqtagh",
        "greeting": "ghah 'ej duvan",
        "greetings": "ghah 'ej duvan",
        "hanukkah": "hanukkah",
        "warm": "warm",
        "wishes": "vlneh",
        "kwanzaa": "kwanzaa"
    }
 ];

// create writeToDom function to output the translation
function writeToDom(stuffToWrite, divId) {
var myDiv = document.getElementById(divId);
myDiv.innerHTML += stuffToWrite;
}

// create a domStringMaker -- how is this different from the above? i don't think this is in my cards as a step to complete. i snagged this from another source so i don't fully understand it and how it relates to the above one.

function domStringMaker(stringToPrint) {
    var string = "<p>" + stringToPrint + "</p>";
    writeToDom(string, "translated");
}

function translate(inputWord) {
    if inputWord === key;
    output the value of that key (key.value?);
}

// create function to capture user input
function userInput()
        {
            var userString = "";
            userString = document.getElementById("textArea").value;
        }
            console.log(userString);

// create function to split user input into strings and put in array
function splitInputArrayToStrings() {
    var userString = "";
    var separateStringsArray = [];
    separateStrings = userString.split(" ");
}
    console.log(separateStringsArray);

// create button action
// loop through buttons to identify which language
function clickButton(btnClikt){
    for (var i = 0; i < button.length; i++) {
        var button = getElementByClassName(btn);

    }
}


    