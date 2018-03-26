var espanol  =
    {
        "a": "un",
        "an": "un",
        "the": "el",
        "and": "y",
        "happy": "feliz",
        "merry": "feliz",
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
        "merry": "glücklich",
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
        "merry": "quch",
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
// locate buttons + save as variables so can add event listener
// in class example -- this will only work for single words
const inputbox = document.getElementById('input');
const espanolbtn = document.getElementById('espanol');
const deutschebtn = document.getElementById('deutsche');
const klingonbtn = document.getElementById('klingon');
const outputbox = document.getElementById('output');

// group buttons in a variable using common class name
let allTheButtons = document.getElementsByClassName('btn');

// loop through allTheButtons and add eventListener to each
for (let i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener('click', (e) => {
        // grab input, make lower case, hold in variable
        let userInput = inputbox.value.toLowerCase();
        // split the input into separate strings
        let inputArray = userInput.split(" ");
            // take split intput and loop through it
            for (var x = 0; x < inputArray.length; x++) {
                // create a variable to later hold the output 
                let domOutput = [];
                // create a variable to hold each iteration (each word)
                let eachWord = inputArray[x];
                if (e.target.id === 'deutsche') {
                    // when it's dynamic and you don't know what the user input is, it must be in [].
                    domOutput += (deutsche[eachWord] + " ");
                } else if (e.target.id === 'espanol') {
                    domOutput += (espanol[eachWord] + " ");
                } else {
                    domOutput += (klingon[eachWord] + " ");
                }
                outputbox.innerHTML += domOutput;
            }
        });
    };

    const clearBtn = document.getElementById('clear');

    clearBtn.addEventListener('click', (e) => {
        outputbox.innerHTML = "";
    });
        
    



// create writeToDom function to output the translation
// function writeToDom(inputString, divId) {
//     var myDiv = document.getElementById(divId);
//     myDiv.innerHTML += inputString;
//     }

    
//     function domStringMaker(stringToPrint) {
//         var string = "<p>" + stringToPrint + "</p>";
//         writeToDom(string, "translated");
//     }

    

    