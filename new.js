var questionBank= [
    {
        question : 'JavaScript is the programming language of the _____.',
        option : ['Desktop' ,'Mobile' ,'Web' ,'Server'],
        answer : 'Web'
    },
    {
        question : 'Which type of JavaScript language is _____?',
        option : ['Object-oriented', 'Object-based', 'Functional programming', 'All of the above'],
        answer : 'Object-based'
    },
    {
        question : 'Which of the following statement is true about the JavaScript?',
        option : ['It is a scripting language used to make the website interactive','It is an advanced version of Java for Desktop and Mobile application development','It is a markup language of Java to develop the webpages','All of the above'],
        answer : ' It is a scripting language used to make the website interactive'
    },
    {
        question : ' JavaScript code can be written in ____.',
        option : ['JavaScript file (.js file)','HTML document directly', 'JavaScript file and in HTML document directly','In style sheets (.css file)'],
        answer : 'JavaScript file and in HTML document directly'
    },
    {
        question : 'JavaScript ignores?',
        option : ['newlines','tabs','spaces' ,'All of the above'],
        answer : 'All of the above'
    }
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

next.addEventListener('click',nextQuestion);


function backToQuiz(){
    location.reload();
}
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();