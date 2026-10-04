const question = document.getElementById("question");
const YesButton = document.getElementById("yes");
const NoButton = document.getElementById("noButton");
const result = document.getElementById("result");
const restartButton = document.getElementById("restartButton");

const flowchart = {

    // QUESTION 1
    Q1: {
        question: "First time using VisualFlow OS?",
        yes: "Q2",
        no: "RESULT 1"
    },

    // QUESTION 2
    Q2: {
        question: "Do you know how to open the Start Menu?",
        yes: "Q3",
        no: "1 Hover your mouse into 4 square",
        
    },

    // QUESTION 3
    Q3: {
        question: "Do you know how to open an application?",
        yes: "Q4",
        no: "RESULT 3"
    },

    // QUESTION 4
    Q4: {
        question: "Do you know how to find and manage your files?",
        yes: "Q5",
        no: "RESULT 4"
    },

    // QUESTION 5
    Q5: {
        question: "Do you know how to change your system settings?",
        yes: "Q6",
        no: "RESULT 5"
    },

    // QUESTION 6
    Q6: {
        question: "Do you know how to connect VisualFlow OS to Wi-Fi?",
        yes: "Q7",
        no: "RESULT 6"
    },

    // QUESTION 7
    Q7: {
        question: "Do you know how to safely shut down VisualFlow OS?",
        yes: "Q8",
        no: "RESULT 7"
    },


};


/* =========================================
   DON'T CHANGE BELOW THIS LINE
   ========================================= */

function showQuestion(id) {

    const current = flowchart[id];

    question.textContent = current.question;

    yesButton.onclick = function () {
        choose(current.yes); 
    };

    noButton.onclick = function () {
        choose(current.no);
    };
}


function choose(next) {

    if (flowchart[next]) {
        showQuestion(next);
    } 
    
    else {
        showResult(next);
    }
}


function showResult(resultText) {

    question.textContent = "Solution";

    result.textContent = resultText;
if (resultText === "1 Hover your mouse into 4 square") {
        document.getElementById("Q1").style.display = "block";
    }

if (resultText === "RESULT 2") {
        document.getElementById("Q1").style.display = "block";
    }
    yesButton.style.display = "none";
    noButton.style.display = "none";

    restartButton.style.display = "inline-block";
}


function restart() {

    result.textContent = "";

    yesButton.style.display = "inline-block";
    noButton.style.display = "inline-block";

    restartButton.style.display = "none";
    document.getElementById("nasaEyes").style.display = "none";

    showQuestion("Q1");
}


restartButton.onclick = restart;

restart();