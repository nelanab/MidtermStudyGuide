//Define two global arrays - first array will hold the questions, second array will hold the answers
var questions = [
    "JavaScript is case-sensitive", 
    "JavaScript is the same as Java", 
    "JavaScript was created in 2000", 
    "JavaScript is a Server side language", 
    "getElementById() is a method of document object", 
    "question",
    "question"
];

var answers = [
    "True", 
    "False", 
    "False", 
    "False", 
    "True"
];	

//statement that targets each box element that has a class attribute of box
var panels = document.getElementsByClassName('box');


var wrongCount = 0, rightCount = 0;

//Event Listener that listens for the end-user to click the page
document.getElementById('button').addEventListener('click', ()=>{

    //populate each block with data from the question array using a looping structure
    for(var x = 0; x < panels.length; x++){

        //assign each box value the respective index within the questions array
        panels[x].innerHTML = questions[x];
        panels[x].style.backgroundColor = "white";
        panels[x].style.color = "#7cd4e0";
    }

    
});

document.getElementById('grid_container').addEventListener('click', function(e){
    var index = e.target.dataset.cue;

    var userResponse = prompt("True or False: " + questions[index]);

    //Make a decision based on userResponse and index of answers array
    if(userResponse == answers[index]){
        panels[index].style.transform ="rotateY(360deg)";
        panels[index].style.backgroundColor = "white";
        panels[index].style.color = '#7cd4e0';
        panels[index].style.transition = "all 2s";
        panels[index].innerHTML = questions[index] + "<br>Correct!<br> The answer is:<br>" + answers[index];

        rightCount+=1; 
        document.getElementById('correct_talley').innerHTML = rightCount;
    }else{
        panels[index].style.transform ="rotateY(360deg)";
        panels[index].style.backgroundColor = "white";
        panels[index].style.color = '#ff6c4a';
        panels[index].style.transition = "all 2s";
        panels[index].innerHTML = questions[index] + "<br>Incorrect! The correct answer is:<br>" + answers[index];
        wrongCount+=1;
        document.getElementById('wrong_talley').innerHTML = wrongCount;
    }
});