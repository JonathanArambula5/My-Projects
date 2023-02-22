var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

function countdown() {
  var sec = 60;
  var timer = setInterval(function(){
    document.getElementById('main').innerHTML=sec;
    sec--;
    if (sec < 0) {
        clearInterval(timer);
        showResults();
    }
  }, 1000);
}

function displayMessage() {
  var wordCount = 0;
}

startBtn.onclick = countdown;







(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
	d: "numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition of an if / else statement is enclosed within:",
      answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
	d: "square brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "Arrays in JavaScript can be used to store:",
      answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
	d: "all of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "String values, when being assigned to variables, must be enclosed within:",
      answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
	d: "parentheses"
      },
      correctAnswer: "c"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: {
        a: "JavaScript",
        b: "terminal / bash",
        c: "for loops",
	d: "console.log"
      },
      correctAnswer: "d"
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
submitButton.addEventListener('click', showResults);
})();

