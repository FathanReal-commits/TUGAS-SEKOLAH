const quesion = document.getElementById(question);
const YesBut = document.getElementById(Yes);
const NoBut = document.getElementById(no);

const flowchart = [
    {
        question: "Is the asteroid diameter greater than 1 km?",
        yes: 1,
        no: 2
    },

    {
        question: "Is it a near-Earth asteroid?",
        yes: "433 Eros",
        no: "16 Psyche"
    },

    {
        question: "Is the diameter greater than 0.5 km?",
        yes: "101955 Bennu",
        no: "25143 Itokawa"
    }
];


function showQuestion(number) {

    const current = flowchart[number];

    question.textContent = current.question;

    yesButton.onclick = function () {
        choose(current.yes);
    };

    noButton.onclick = function () {
        choose(current.no);
    };
}




showQuestion(0);
