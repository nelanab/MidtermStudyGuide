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
        card.style.transform="rotateX(360deg)";
        card.style.transition = "all 2s";
        card.innerHTML =  "<br>Correct!<br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer;
        
        rightCount+=1;
        document.getElementById('correct_talley').innerHTML = rightCount;
    }if (userResponse != questions[currentQuestion].correctAnswer){
        card.style.transform = "rotateX(360deg)";
        card.style.border = "2px solid #ff64ca";
        card.style.color = "#ff64ca";
        card.style.boxShadow = "0 10px 0 #ff64ca";
        card.style.transition = "all 2s";
        card.innerHTML = "<br>Incorrect :(<br>" + questions[currentQuestion].question + "<br>is " + questions[currentQuestion].correctAnswer;
    
        wrongCount +=1;
        document.getElementById('wrong_talley').innerHTML = wrongCount;
    }
};

function loadNextQuestion() {
    currentQuestion++;
    card.style.color = "#7cd4e0";
    card.style.border = "2px solid #7cd4e0";
    card.style.transform = "rotateX(-360deg)";
    card.style.boxShadow = "0 10px 0 #7cd4e0";
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

nextButton.addEventListener('click', loadNextQuestion);
answerButton.addEventListener('click', answerQuestion);
