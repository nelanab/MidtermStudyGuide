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
const answerButton = document.querySelector('#answer');
const nextButton = document.querySelector('#next');

// Populate Question card with Question
function generateQuestions(index) {
    console.log(index);
    // Push Question text to Card
    card.innerHTML = questions[index].question;
}

function answerQuestion(){
    var userResponse = prompt("Is this True or False? " + questions[currentQuestion].question);
    
    if(userResponse == questions[currentQuestion].correctAnswer){
        card.innerHTML =  "<p><span id='correct_text' class='answer_text'>Correct!</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var correctText = document.getElementById("correct_text");
        card.style.transition = "all .2s";
        correctText.style.color = "#55AA44";

        rightCount+=1;
        document.getElementById('correct_talley').innerHTML = rightCount;
    }if (userResponse != questions[currentQuestion].correctAnswer){
        card.innerHTML = "<p><span id='incorrect_text' class='answer_text'>Incorrect :(</span><br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer + "</p>";
        var incorrectText = document.getElementById("incorrect_text");
        incorrectText.style.color = "#993311";
        card.style.transition = "all .2s";

        wrongCount +=1;
        document.getElementById('wrong_talley').innerHTML = wrongCount;
    }

    answerButton.style.display="none";
    nextButton.style.display="block";
};

function loadNextQuestion() {
    currentQuestion++;
    answerButton.style.display="block";
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
// On page load, loads first question
generateQuestions(currentQuestion);
answerButton.addEventListener('click', answerQuestion);
nextButton.addEventListener('click', loadNextQuestion);

// Populate Questions Page
var questionText = document.getElementsByClassName('question');
var answerText = document.getElementsByClassName('question_answer');

var questionContainer = document.getElementById("question_container");
var cardContainer = document.getElementById("card_container");
var showQuestionsButton = document.getElementById("")

function showQuestions(){

}


/* for (i = 0; i< totalQuestions; i++) {
    var questionsText=  questions[i];
    for (var object in questionsText) {
        parsed += object + ": " + questionsText[object] + "\n";          
    }
}                           
$("#box").val(parsed);  */ 
