console.log('hi');

var espanol  =
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
    };
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
    };
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
    };
// format user input


// create function to capture user input
function userInput()
        {
            var userString = "";
            userString = document.getElementById("input").value;
            return userString;
        }
            // console.log(userString);

// create function to lowercase everything + then split userInput into strings of indidual words and put in array
function splitInputArrayToStrings() {
    var userString = "";
    var separateStringsArray = [];
    separateStringsArray = userString.toLowerCase().split(" ");
    return separateStringsArray;
}
    // console.log(separateStringsArray);

// create button action. 3 buttons; 1 of each language
// loop through buttons to identify which language
var button = getElementByClassName(btn);
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(event) {
            
        })
}

// create writeToDom function to output the translation
function writeToDom(inputString, divId) {
    var myDiv = document.getElementById(divId);
    myDiv.innerHTML += inputString;
    }

    // function writeToDom(inputString, id){
    //     document.getElementById(id).innerHTML = inputString;
    // }
    
    // call it
    // writeToDom(stuffToWrite, divId)
    
    function domStringMaker(stringToPrint) {
        var string = "<p>" + stringToPrint + "</p>";
        writeToDom(string, "translated");
    }

    