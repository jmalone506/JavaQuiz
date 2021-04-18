var test = document.getElementById("test");
var question = document.getElementById("questions")
var potentialA = document.getElementById("potentialCorrects")
var points = document.getElementById("points")

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer1");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var timeLeft = document.getElementById("TimeLeft")
var userName = document.getElementById("userName")
var correct = document.getElementById("Correct")
var container = document.getElementById("container")

var questions = [
  {
    question: "What is javaScript:",
    a:"is a scripting or programming language that allows you to implement complex features on web pages ",
     b:"is the standard markup language for Web pages. ", 
     c:"elements are represented by <> tags.",
    Correct: "is a scripting or programming language that allows you to implement complex features on web pages "
  },
  {
    question: "what is the id symbol?",
    a:"6",
     b:"#", 
   c: "<class>", 
   d:"<script>",
    Correct: "#"
  },
  {
    question: "Where should you insert JavaScript?",
    a:"the <head>", 
    b:"the bottom of the <body>", 
    c:"anywhere in the HTML",
    d: "anywhere in the stylesheet",
    Correct: "the bottom of the <body>"
  },
  {
    question: "what is a function in JavaScript?",
    a:"how you start a body syntex", 
    b:" is similar to a procedure—a set of statements that performs a task or calculates a value", 
    c: "elements are represented by <> tags.", 
    d:"a command in html",
    Correct: " is similar to a procedure—a set of statements that performs a task or calculates a value,"
  },
  {
    question: "what does html stand for?",
    a:"Hyper Text Makeup Language", 
    b:"Hyper Transaction Markup Language", 
    c:"Hyper Text Markup List", 
    d:"Hyper Text Markup Language",
    Correct: "Hyper Text Markup Language"
  },
  {
    question: "what is Jquery?",
    a:"is a lightweight, write less, do more",
    b: "JavaScript library",
    c: "its a html shortcut ", 
    d:"its a if statement",
    Correct: "is a lightweight, write less, do more, JavaScript library"
  }

]

container.addEventListener("click", start)

function showQuestion(){
  question.innerHTML="<h3>"+ questions[questionsfollowing].question+"</h3>";
  answer1.textContent= questions[questionsfollowing].a
  answer2.textContent= questions[questionsfollowing].b
  answer3.textContent= questions[questionsfollowing].c
  answer4.textContent= questions[questionsfollowing].d

}
function showTimer(){
  timeInv = setInterval(function(){
    quizTimer--;
    countdown.textContent = "Time: " +quizTimer;
    if(quizTimer === 0){
      clearInterval(timeInv);
      endPage();
    }
    timeDone = 60 -quizTimer;

  }, 1000);
}
function start(){
  container.style.display = "none";
  showQuestion()
  showTimer()
  quiz.style.display = "block"
}

answer1.addEventListener("click", nextQuestion)
answer2.addEventListener("click", nextQuestion)
answer3.addEventListener("click", nextQuestion)
answer4.addEventListener("click", nextQuestion)

