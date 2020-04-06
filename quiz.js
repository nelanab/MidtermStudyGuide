var parsed = "";
var questions = [
    {
        "question": "JavaScript is case-sensitive", 
        "correctAnswer" : "True"
    },
    {
        "question" : "JavaScript is the same as Java", 
        "correctAnswer" : "False"
    },
    { 
        "question" : "JavaScript was created in 2000",
        "correctAnswer" : "False"
    }, 
    {
        "question" : "JavaScript is a Server side language",
        "correctAnswer" : "False"
    },
    {
        "question" : "getElementById() is a method of document object",
        "correctAnswer" : "True"
    } 
];

// Load first question on page laod
let currentQuestion = 0;

var wrongCount = 0, rightCount = 0;

// Sets total amount of questions to total in questions array
const totalQuestions = questions.length;

// Target Question card to be populated by question in question array
const card = document.querySelector('#card');
const answerButton = document.querySelector('#truefalse');
const nextButton = document.querySelector('#next');

// Populate Question card with Question
function generateQuestions(index) {
    console.log(index);
    // Push Question text to Card
    card.innerHTML = questions[index].question;
}

function loadNextQuestion() {
    currentQuestion++;
    answerButton.style.display="flex";
    nextButton.style.display="none";
    card.style.color = "white";
    card.style.transition = "transform 0s ease-in";

    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Show Results';
    }

    if(currentQuestion == totalQuestions) {
        card.style.display = "none";
        nextButton.style.display = "none";
        answerButton.style.display = "none";
    }
    
    else{
        generateQuestions(currentQuestion);
    }
} 

// If the True is chosen:
function answerTrue(){
    if (questions[currentQuestion].correctAnswer == 'True'){
        card.innerHTML =  "<p><span id='correct_text' class='answer_text'>Correct!</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var correctText = document.getElementById("correct_text");
        card.style.transition = "all .2s";
        correctText.style.color = "#55AA44";

        rightCount+=1;
        document.getElementById('correct_talley').innerHTML = rightCount;
    }

    else{
        card.innerHTML = "<p><span id='incorrect_text' class='answer_text'>Incorrect :(</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var incorrectText = document.getElementById("incorrect_text");
        incorrectText.style.color = "#993311";
        card.style.transition = "all .2s";

        wrongCount +=1;
        document.getElementById('wrong_talley').innerHTML = wrongCount;
    }

    answerButton.style.display="none";
    nextButton.style.display="block";
}

function answerFalse(){
    if (questions[currentQuestion].correctAnswer == 'False'){
        card.innerHTML =  "<p><span id='correct_text' class='answer_text'>Correct!</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var correctText = document.getElementById("correct_text");
        card.style.transition = "all .2s";
        correctText.style.color = "#55AA44";

        rightCount+=1;
        document.getElementById('correct_talley').innerHTML = rightCount;
    }

    else{
        card.innerHTML = "<p><span id='incorrect_text' class='answer_text'>Incorrect :(</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var incorrectText = document.getElementById("incorrect_text");
        incorrectText.style.color = "#993311";
        card.style.transition = "all .2s";

        wrongCount +=1;
        document.getElementById('wrong_talley').innerHTML = wrongCount;
    }

    answerButton.style.display="none";
    nextButton.style.display="block";
}

// Add onclick to true and false buttons
var trueButton = document.getElementById('trueButton');
trueButton.addEventListener('click', answerTrue);
var falseButton = document.getElementById('falseButton');
falseButton.addEventListener('click', answerFalse);

// On page load, loads first question
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);

// Populate Questions Page
var questionText = document.getElementsByClassName('question');
var answerText = document.getElementsByClassName('question_answer');

var questionContainer = document.getElementById("question_container");
var cardContainer = document.getElementById("card_container");
var showQuestionsButton = document.getElementById("show_questions")

function showQuestions(){

}
