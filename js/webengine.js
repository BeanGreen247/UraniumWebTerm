
let you = "RandomUser1";
var menu0=0;
botSays("\n.\n  |     You have crashed my website. thx a ton\n.")
botSays("\n\nLoading\n")
var dots=[".","","",".",".",".",".100%"];
var loadtext = "";
for (var i = 0; i <= 6; i++) {
  loadtext+= dots[i]+"";
  botSays(loadtext);
}
botSays("\ndone\n\nEntered recovery mode\n\nType !name x where x = yourName to change your name dear RandomUser1.\nType !help for a hint\n\n\n")
// Recognized Speech Patterns for Question Responses
const Hello = ["HI", "HEY", "HOWDY", "HEYA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]
const Goodbye = ["BYE", "SEE YA", "CYA", "LATER", "ADIOS", "SAYONARA", "SEEYA"]
const Greeting = ["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE DAY", "GOOD MORNING", "GOOD NIGHT"]
const Name = ["WHAT IS YOUR NAME", "WHAT'S YOUR NAME", "WHO ARE YOU", "WHAT DO THEY CALL YOU", "COMO TE LLAMAS"]
const Actions = ["HELP", "DRINK", "CHALLENGE", "SEARCH"]
const Questions = ["QUESTION", "QUIZ", "CODE", "ANSWER", "HTML", "CSS", "JAVASCRIPT", "WHO MADE YOU"];
const HTMLTags1 = ["<P>", "<I>", "<SPAN>", "<DIV>", "<ARTICLE>", "<IFRAME>", "<A>", "<ABBR>", "<ADDRESS>", "<AUDIO>"];
// Skip the CMD Line and learn HTML by reading my code!~~ here have fun.
const HTMLTags2 = [
    "<A>", //    Defines a hyperlink
    "<ABBR>", //Defines an abbreviation or an acronym
    "<ACRONYM>", //    Not supported in HTML5. Use <abbr> instead. Defines an acronym
    "<ADDRESS>", //    Defines contact information for the author/owner of a document
    "<APPLET>", //    Not supported in HTML5. Use <embed> or <object> instead. Defines an embedded applet
    "<AREA>", //    Defines an area inside an image-map
    "<ARTICLE>", //    Defines an article
    "<ASIDE>", //    Defines content aside from the page content
    "<AUDIO>", //    Defines sound content
    "<B>" // Defines bold text
]
const HTMLTags3 = [
    "<BASE>", // Specifies the base URL/target for all relative URLs in a document
    "<BASEFONT>", //    Not supported in HTML5. Use CSS instead. Specifies a default color, size, and font for all text in a document
    "<BDI>",    // Isolates a part of text that might be formatted in a different direction from other text outside it
    "<BDO>",    //Overrides the current text direction
    "<BIG>",    //Not supported in HTML5. Use CSS instead. Defines big text
    "<BLOCKQUOTE>", //    Defines a section that is quoted from another source
    "<BODY>",    //Defines the document's body
    "<BR>",    //Defines a single line break
    "<BUTTON>",    //Defines a clickable button
    "<CANVAS>"    //Used to draw graphics, on the fly, via scripting (usually JavaScript)
]
const HTMLTags4 = [
    "<CAPTION>",    //Defines a table caption
    "<CENTER>", //    Not supported in HTML5. Use CSS instead. Defines centered text
    "<CITE>", //Defines the title of a work
    "<CODE>",    //Defines a piece of computer code
    "<COL>",    //Specifies column properties for each column within a <colgroup> element
    "<COLGROUP>",    //Specifies a group of one or more columns in a table for formatting
    "<DATALIST>",    //Specifies a list of pre-defined options for input controls
    "<DD>",    //Defines a description/value of a term in a description list
    "<DEL>",    //Defines text that has been deleted from a document
    "<DETAILS>",    //Defines additional details that the user can view or hide
    "<DFN>" //    Represents the defining instance of a term
]
const colors = ["BLUE", "RED", "GREEN", "YELLOW", "WHITE", "BLACK", "SILVER", "GRAY"];
let Else = true;
const questions = [colors, HTMLTags4, HTMLTags3, HTMLTags2, HTMLTags1, Hello, Goodbye, Greeting, Name, Actions, Questions];
const reactions = [SystemHello, SystemGoodbye, SystemGreeting];
const SystemHello = ["HI", "HEY", "HOWDY", "HEYA", "HOLA", "HELLO", "SUP", "KONNICHIWA", "ALOHA"]
const SystemGoodbye = ["BYE", "SEE YA", "CYA", "LATER", "ADIOS", "SAYONARA", "SEEYA"]
const SystemGreeting = ["WHAT'S UP", "HOW'S IT GOING", "HOW ARE YOU", "NICE TO SEE YOU", "GOOD MORNING", "WELCOME"]
const BotPleasant = ["Thanks.", "Good job.", "Cool.", "I see.", "Anyway.", "right-o."]
function answer(x) {
    const botOut = botChat.value;
    document.getElementsByTagName("textarea")[0] = botChat
    //RESPONSES//
    document.getElementsByTagName("input")[0].value = ""
    if (x.charAt(0).includes("!") === false) {
        youSay(x); botChat.scrollTop = botChat.scrollHeight;
    }
    question = x.toUpperCase()
    for (i = 0; i <= 9999; i++) {
        /*          EMPTY RESPONSE          */
        if (question === "" || null) {
            setTimeout(function () { botSays("\nSystem : What? You shy?"); botChat.scrollTop = botChat.scrollHeight; }, 600);
            return;
        }
        /*          COMMAND MENU RESPONSES         */
        else if (question === "!MENU") {
            botSays("\nCommands are " +
                "\n           !print welcome - writes out welcome message" +
                "\n           !Name yourName - changes users name" +
                "\n           !Bgcolor backgroundColor - changes background color" +
                "\n           !Text textColor  - changes text color" +
                "\n           !Menu - opens this menu" +
                "\n           !Secrets - top secret" +
                "\n           !Tutorial - opens tutorial" +
                "\n           !Systemsay textSays - makes the System say what you type" +
                "\n           !Me textDoes - shows typed text as if you said it" +
                "\n           !Search termYouWantToSearch - searcher a term using Google Search" +
                /*"\n           !clear - clears out the terminal"+*/
                "\n           !sysinfo - lists system information"+
                /*"\n           "+*/
                /*"\n           "+*/
                /*"\n           "+*/
                /*"\n           "+*/
                "\n"); botChat.scrollTop = botChat.scrollHeight;
            return;
        } else if (question.slice(0, 9).includes("!BGCOLOR ")) {
            botSays("\n\n**Changed the background color to " + x.slice(9)); botChat.scrollTop = botChat.scrollHeight; botChat.style.backgroundColor = x.slice(9);
            return;
        } else if (question.slice(0, 6).includes("!TEXT ")) {
            botSays("\n\n**Changed the text color to " + x.slice(6)); botChat.scrollTop = botChat.scrollHeight; botChat.style.color = x.slice(6);
            return;
        } else if (question.slice(0, 6).includes("!NAME ")) {
            you = x.slice(6);
            botSays("\n\n**Your name is " + you); botChat.scrollTop = botChat.scrollHeight;
            return;
        } else if (question.slice(0, 9).includes("!SECRETS")) {
            botSays("\n\n**What? I don't have any secrets. I've got nothing to hide."); botChat.scrollTop = botChat.scrollHeight;
            return;
        }
        else if (question.slice(0, 10).includes("!TUTORIAL")) {
            botSays("\n\n**What? I don't have a tutorial. Read my code, I'm not going to explain myself."); botChat.scrollTop = botChat.scrollHeight;
            return;
        }
        else if (question.slice(0, 10).includes("!SYSTEMSAY")) {
            botSays("\nSystem : " + x.slice(8)); botChat.scrollTop = botChat.scrollHeight;
            return;
            /* SEARCH FUNCTION implemented */
        }

        else if (question.slice(0, 10).includes("!SYSINFO")) {
            botSays("System : Here is the basic information about our system:" +
            "\n             .888888:.           " + " beangreen247@ihatewindows " +
            "\n             88888.888.          " + " -------------------------- " +
            "\n            .8888888888          " + " OS: Uranium GNU/Linux 0.0.1 (uranium) x86_64" +
            "\n            8' `88' `888         " + " Kernel: 99.99.9-9-amd64" +
            "\n            8 8 88 8 888         " + " Packages: ∞" +
            "\n            8:.,::,.:888         " + " Shell: UraniumWebTerm" +
            "\n           .8`::::::'888         " + " DE: UraniumDE" +
            "\n           88  `::'  888         " + " WM: UraniumWM" +
            "\n          .88        `888.       " + " WM Theme: UraniumBlueScreen" +
            "\n        .88'   .::.  .:8888.     " + " Theme: UraniumBlueScreen" +
            "\n        888.'   :'    `'88:88.   " + " Icons: what icons!?" +
            "\n      .8888'    '        88:88.  " + " Terminal: UraniumTerm" +
            "\n     .8888'     .        88:888  " + " Terminal Font: Courier 20px" +
            "\n     `88888     :        8:888'  " + " CPU: BonkRipper 9900 Weed @ ∞ THz" +
            "\n      `.:.88    .       .::888'  " + " GPU: BonkRipper TTX 9080 Wi" +
            "\n     .:::::88   `      .:::::::. " + " Memory: 420TB total" +
            "\n    .::::::.8         .::::::::: " +
            "\n    :::::::::..     .:::::::::'  " +
            "\n     `:::::::::88888:::::::'     " +
            "\n        rs`:::'       `:'        " +
            "\n           "); botChat.scrollTop = botChat.scrollHeight;
            return;
            }

            /* SEARCH FUNCTION implemented */

        else if (question.slice(0, 10).includes("!SEARCH")) {
            botSays("\nSystem : I´ll search for " + x.slice(8)); botChat.scrollTop = botChat.scrollHeight;
            window.open('https://www.google.com/search?q=' + x.slice(8), '_blank');
            return;
          }
        else if (question.slice(0, 10).includes("!SITES")) {
            botSays("\nSystem : " + x.slice(8)); botChat.scrollTop = botChat.scrollHeight;
            return;
        }
        else if (question.slice(0, 4).includes("!ME")) {
            youDo(x.slice(4)); botChat.scrollTop = botChat.scrollHeight;
            return;
        }
        /*not working as of now*/
        /*else if (question.slice(0, 6).includes("!CLEAR")) {
            document.getElementsByTagName("textarea")[0].value = '';
            return;
        }*/

        else if (question.slice(0, 20).includes("!PRINT WELCOME")) {
                botSays("\nWELCOME!"+
                "\nMy name is Tomas Mozdren..."+
                "\nI am a IT student on the Middle school in Frenštát pod Radhoštěm called Gymnázium a Střední průmyslová škola elektrotechniky a informatiky. Love creating things with the help of code and adore AI. When it comes to social life I am not afraid to go out with people that I just met." +
                "\nI also do some sports here and there like running and cycling." +
                "\nI am quite tall, have blonde hair, light blue eyes and round face. Wide shoulders,....but my looks do not matter." +
                "\nI am 20 years old and live in Nový Jičín, Moravian-Silesian Region of the Czech Republic."); botChat.scrollTop = botChat.scrollHeight;
                return;
            }
        else if (question.slice(0, 20).includes("!LS LINKS")) {
                menu0=1;
                botSays("\n\n1 - Data structures in Python " +
                        "\n2 - something " ); botChat.scrollTop = botChat.scrollHeight;
                return;
            }
        else if (menu0==1 && question.slice(0, 1).includes("1")) {
              window.open('https://github.com/BeanGreen247/Data-Structures-In-Python#data-structures-in-python', '_blank');
              return;
            }

        else if (question.slice(0, 20).includes("!LS PROJECTS")) {
                botSays(""); botChat.scrollTop = botChat.scrollHeight;
                return;
            }

        /* Questions, Answers and Responses */
        if (question.includes(Goodbye[i])) {
            Else = false;
            setTimeout(botSays, 600, "\
                                 System : beangreen247. Leave an upvote?")
        } else if (question.includes(Name[i])) {
            Else = false; setTimeout(botSays, 600, "\nSystem : My name is MinBot. You can call me MB.")
        } else if (question.includes(HTMLTags1[i])) {
            /*HTML Tag Definitions Courtesy of W3Schools.com*/
            Else = false; if (HTMLTags1[i] === "<P>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<p>' Defines a paragraph.") } else if (HTMLTags1[i] === "<I>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<i>' Defines a part of text in an alternate voice or mood. Italics.") } else if (HTMLTags1[i] === "<SPAN>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<Span>' Defines a section in a document.") } else if (HTMLTags1[i] === "<A>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<Span>' Defines a section in a document.") }
        } else if (question.includes(HTMLTags2[i])) {
            /*HTML Tag Definitions Courtesy of W3Schools.com*/
            Else = false; if (HTMLTags2[i] === "<ABBR>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<abbr>' Defines an abbreviation or acronym.") } else if (HTMLTags2[i] === "<ACRONYM>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<acronym>' Not supported in HTML5, use '<abbr>' instead.") } else if (HTMLTags2[i] === "<ADDRESS>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<address>' Defines contact information for the author/owner of a document.") } else if (HTMLTags2[i] === "<APPLET>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<applet>' Not supported in HTML5, use '<embed>' or '<object>' instead.") } else if (HTMLTags2[i] === "<AREA>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<area>' Defines an area inside an image map") } else if (HTMLTags2[i] === "<ARTICLE>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<article>' Defines an article.") } else if (HTMLTags2[i] === "<ASIDE>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<aside>' Defines content aside from the page content.") } else if (HTMLTags2[i] === "<AUDIO>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<audio>' Defines sound content.") } else if (HTMLTags2[i] === "<B>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<B>' Defines bold text.") }
        } else if (question.includes(HTMLTags3[i])) {
            Else = false;
            if (HTMLTags3[i] === "<BASE>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<base>' Specifies the base URL/target for all relative URLs in a document") } else if (HTMLTags3[i] === "<BASEFONT>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<basefont>' Not supported in HTML5. Use CSS instead.  Specifies a default color, size, and font for all text in a document. ") } else if (HTMLTags3[i] === "<BDI>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<bdi>' Isolates a part of text that might be formatted in a different direction from other text outside it. ") } else if (HTMLTags3[i] === "<BDO>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<bdo>' Overrides the current text direction. ") } else if (HTMLTags3[i] === "<BIG>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<big>' Not supported in HTML5, use CSS instead. Defines big text. ") } else if (HTMLTags3[i] === "<BLOCKQUOTE>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<blockquote>' Defines a section that is quoted from another source. ") } else if (HTMLTags3[i] === "<BODY>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<body>' Defines a document's body. ") } else if (HTMLTags3[i] === "<BR>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<br>' Defines a single line break. ") } else if (HTMLTags3[i] === "<BUTTON>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<button>' Defines a clickable button. ") } else if (HTMLTags3[i] === "<CANVAS>") { setTimeout(botSays, 600, "\nSystem : The HTML tag '<canvas>' Used to draw graphics, on the fly, via scripting. Usually Javascript. ") }
        } else if (question.includes(Actions[i])) {
            Else = false; if (question.includes("CHALLENGE")) { setTimeout(botSays, 600, "\nSystem : Challenge my creator. Go for it.") } else { setTimeout(botSays, 600, "\nSystem : How can I help?  Use my commands !Menu & !Tutorial to see what I can do.") }
        } else if (question.includes(Questions[i])) {
            Else = false; if (question.includes("WHO MADE YOU")) { setTimeout(botSays, 600, "\nSystem : So you wanna know something about my creator. Well go to this page why don´t ya. https://beangreen247.github.io/home/") } else { setTimeout(botSays, 600, "\nSystem : How can I help?  Use my commands !Menu & !Tutorial to see what I can do.") }
        } else if (question.includes(Questions[i])) {
            Else = false; if (Questions[i].includes("HTML")) { setTimeout(botSays, 600, "\nSystem : Ask my creator. Go for it. Post your question in the comments, he'll try to help you. I'm just a code, I don't know HOW to code.") } else { setTimeout(botSays, 600, "\nSystem : How can I help? Use my commands !Menu & !Tutorial to see what I can do.") }
        } else if (question.includes(Greeting[i])) {
            Else = false; if (Greeting[i].includes("HOW") && Greeting[i].includes("YOU")) {
                const reactHello = "How am I";
                const reactGreeting = "I would say I am 40% complete."
            }
            else {
                num = Math.ceil(Math.random() * 3)
                let reactHello = Greeting[num]
                reactHello = reactHello.toLowerCase();
                reactHello = reactHello.charAt(0).toUpperCase() + reactHello.slice(1);
                const reactGreeting = "Same old. Getting coded mostly.";
            }
            const reactPleasant = BotPleasant[num]
            setTimeout(botSays, 600, "\nSystem : " + reactHello + ". " + reactGreeting + " " + reactPleasant)
        } else if (question.includes(Hello[i])) {
            let reactHello = Hello[i];
            reactHello = reactHello.toLowerCase();
            reactHello = reactHello.charAt(0).toUpperCase() + reactHello.slice(1);
            const reactGreeting = "";
            const reactPleasant = ""
            Else = false;
            setTimeout(botSays, 600, "\nSystem : " + reactHello + ".")
        } else { }
    } setTimeout(function () { if (Else === true) { botSays("\n\n**Error 404: Response Not Found."); } }, 700); setTimeout(function () { Else = true; botChat.scrollTop = botChat.scrollHeight; }, 730)
} function botSays(x) {
    document.getElementsByTagName("textarea")[0].innerHTML += x;
} function youSay(x) {
    botSays("\n" + you + " \ : " + x)
}
function youDo(x) {
    botSays("\n" + you + " " + x)
} function enterButton(e, x) { if (e.keyCode == 13) { answer(x); } }
