var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
        question:
          "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<javascript>", "<script>", "<scripting>"],
        answer: "<script>",
      },
      {
        question:
          'What is the correct syntax for referring to an external script called "xxx.js"?',
        choices: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">', "Zack is awesome"],
        answer: '<script src="xxx.js">',
      },
  ];
  
  var startEl = document.querySelector("#start");
  var questionEl = document.querySelector("#question");
  var optionListEl = document.querySelector("#option-list");
  var questionResultEl = document.querySelector("#question-result");
  var timerEl = document.querySelector("#timer");
  
  var questionIndex = 0;
  var correctCount = 0;
  
  var time = 20;
  var intervalId;



function pageLoad() {
// First function to execute
    var startButton = document.createElement("BUTTON");
    startButton.textContent = "Start";
    startButton.setAttribute("class", "start-button")
    startEl.appendChild(startButton)
  };


function renderQuestion() {
    // debugger;
// Runs when startButton defined in pageLoad() function is clicked
// Hides startEl and then renders the first question
    startEl.hidden = true;

    questionEl.textContent = questions[questionIndex].question;

    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";
  
    var choices = questions[questionIndex].choices;
    var choicesLength = choices.length;

    for (var i = 0; i < choicesLength; i++) {
        var questionListItem = document.createElement("li");
        questionListItem.textContent = choices[i];
        optionListEl.append(questionListItem);
    }; 

};


function checkAnswer(event) {
// runs when a list option is selected in the quiz
    if (event.target.matches("li")) {
      var answer = event.target.textContent;
      if (answer === questions[questionIndex].answer) {
        questionResultEl.textContent = "Correct";
        correctCount++;
      } else {
        questionResultEl.textContent = "Incorrect";
      }
    }
    // runs the nextQuestion function 2 seconds after an option is selected
    setTimeout(nextQuestion, 2000);
  }

function nextQuestion() {
// Adds one to the questionIndex variable and then loads the next question in the questions object using the renderQuestion function
// if we run out of questions, this function will end the quiz instead using the endQuiz function
    questionIndex++;
    if (questionIndex < questions.length) {
    renderQuestion();
    } else {
        endQuiz()
    }
};


function endQuiz() {

    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
  }

// Start the script
pageLoad();

// Renders the first question when Start Button is Clicked
var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", renderQuestion);

// Checks for when a list option is selected in the quiz
optionListEl.addEventListener("click", checkAnswer);