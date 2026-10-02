const question = document.getElementById("question");
const YesButton = document.getElementById("yes");
const NoButton = document.getElementById("noButton");
const result = document.getElementById("result");
const restartButton = document.getElementById("restartButton");

const flowchart = {

    // QUESTION 1
    Q1: {
        question: "WRITE QUESTION 1 HERE",
        yes: "Q2",
        no: "RESULT 1"
    },

    // QUESTION 2
    Q2: {
        question: "WRITE QUESTION 2 HERE",
        yes: "Q3",
        no: "RESULT 2"
    },

    // QUESTION 3
    Q3: {
        question: "WRITE QUESTION 3 HERE",
        yes: "Q4",
        no: "RESULT 3"
    },

    // QUESTION 4
    Q4: {
        question: "WRITE QUESTION 4 HERE",
        yes: "Q5",
        no: "RESULT 4"
    },

    // QUESTION 5
    Q5: {
        question: "WRITE QUESTION 5 HERE",
        yes: "Q6",
        no: "RESULT 5"
    },

    // QUESTION 6
    Q6: {
        question: "WRITE QUESTION 6 HERE",
        yes: "Q7",
        no: "RESULT 6"
    },

    // QUESTION 7
    Q7: {
        question: "WRITE QUESTION 7 HERE",
        yes: "Q8",
        no: "RESULT 7"
    },

    // QUESTION 8
    Q8: {
        question: "WRITE QUESTION 8 HERE",
        yes: "Q9",
        no: "RESULT 8"
    },

    // QUESTION 9
    Q9: {
        question: "WRITE QUESTION 9 HERE",
        yes: "Q10",
        no: "RESULT 9"
    },

    // QUESTION 10
    Q10: {
        question: "WRITE QUESTION 10 HERE",
        yes: "RESULT 10",
        no: "RESULT 11"
    }
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

    question.textContent = "🔭 Classification Complete";

    result.textContent = resultText;
if (resultText === "RESULT 1") {
        document.getElementById("nasaEyes").style.display = "block";
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