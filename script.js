"strict mode";

// select all the html emelent
const header = document.querySelector(".header");
const viewScoreBtn = document.querySelector("#view-highscores");
const time = document.querySelector("#time");
const startPage = document.querySelector(".startPage");
const startBtn = document.querySelector("#button-start");
const questionPage = document.querySelector(".questionPage");
const question = document.querySelector("#question");
const answers = document.querySelectorAll(".button");
const answerDisplay = document.querySelector("#answer-display");
const playerInputPage = document.querySelector(".playerInputPage");
const highScorePage = document.querySelector(".highScorePage");
const initial = document.querySelector("#initial");
const scoreResult = document.querySelector("#score");
const initialBtn = document.querySelector("#button-initial");
const scoreList = document.querySelector("#scoreList");
const scoresDisplay = document.querySelector(".scoresDisplay");
const clearBtn = document.querySelector("#clearScore");
const backBtn = document.querySelector("#back");

// define global variables
const questions = [
  "Which one of the following is not a primative data type in JavaScript?",
  "Which one of the following is not a logical operator?",
  "Which one of the following is not an iterable in JavaScript?",
  "What does DOM mean in JavaScript?",
  "Which method below can store data in the browser that persist even after the browswer is closed? ",
];
const answer = [
  ["String", "Boolean", "Object", "Number"],
  ["=", ">", "<=", "==="],
  ["Array", "Number", "Object", "String"],
  [
    "Donut On Moon",
    "Document Object Model",
    "Doodle Over Me",
    "Document Object Manipulation",
  ],
  ["store()", "sessionStorage()", "icloud()", "localStorage()"],
];

const correctAnswerIndex = [2, 0, 1, 1, 3];

let questionNumber = 0;
let score = 0;
let user = {};
let highscores = [];
let timer;
let timeLeft = 0;

// define timer function
function timerStart() {
  timeLeft = 60;
  timer = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft <= 0) {
      gameOver();
    }
  }, 1000);
}

// render question
function renderQestion() {
  question.textContent = questions[questionNumber];
  answers.forEach(
    (el, i) => (el.textContent = `${i + 1}. ${answer[questionNumber][i]}`)
  );
}

// render result
function resultDisaplay(result) {
  answerDisplay.textContent = result;
  answerDisplay.classList.remove("hidden");
}

// render player input page
function renderPlayerInput() {
  questionPage.classList.add("hidden");
  playerInputPage.classList.remove("hidden");
  score <= 0 ? (score = 0) : score;
  scoreResult.textContent = score;
}

// render highscore page
function renderHighscore() {
  scoreList.innerHTML = "";
  header.classList.add("hidden");
  playerInputPage.classList.add("hidden");
  highScorePage.classList.remove("hidden");
  if (JSON.parse(localStorage.getItem("highscores"))) {
    let highscores = JSON.parse(localStorage.getItem("highscores"));
    for (let i = 0; i < highscores.length; i++) {
      let list = document.createElement("li");
      list.setAttribute("data-number", i);
      list.classList.add("scoresDisplay");
      scoreList.appendChild(list);
      list.textContent = `${i + 1}. ${highscores[i].initial}- ${
        highscores[i].score
      }`;
    }
    // } else {
    //   scoreList.textContent = "";
  }
}

// update highscores list
function updateHighscores(user) {
  if (JSON.parse(localStorage.getItem("highscores"))) {
    highscores = JSON.parse(localStorage.getItem("highscores"));
    highscores.push(user);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  } else {
    highscores.push(user);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }
}

// check answers and render result
function checkAnswer(i) {
  if (Number(i) === correctAnswerIndex[questionNumber]) {
    resultDisaplay("Correct!");
    setTimeout(function () {
      answerDisplay.classList.add("hidden");
    }, 500);
    score += 20;
  } else {
    resultDisaplay("Wrong!");
    setTimeout(function () {
      answerDisplay.classList.add("hidden");
    }, 500);

    score -= 10;
    timeLeft -= 10;
  }
}

// define initiation function
function init() {
  questionPage.classList.add("hidden");
  playerInputPage.classList.add("hidden");
  highScorePage.classList.add("hidden");
  header.classList.remove("hidden");
  startPage.classList.remove("hidden");
  answerDisplay.classList.add("hidden");
  questionNumber = 0;
  score = 0;
  user = {};
  highscores = [];
  viewScoreBtn.disabled = false;
}

// define losing game function
function gameOver() {
  clearInterval(timer);
  time.textContent = "";
  renderPlayerInput();
}

// add event for start button
startBtn.addEventListener("click", function () {
  startPage.classList.add("hidden");
  questionPage.classList.remove("hidden");
  timerStart();
  renderQestion();
  viewScoreBtn.disabled = true;
});

// add event for answer button
answers.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    checkAnswer(e.target.dataset.number);
    questionNumber++;
    if (questionNumber === questions.length) {
      setTimeout(gameOver, 500);
      return;
    }
    renderQestion();
  });
});

// add event for submit button on the player input page
initialBtn.addEventListener("click", function () {
  // ADD LOGIC WHAT IF THE INPUT IS EMPTY??
  if (initial.value) {
    user.initial = initial.value.toUpperCase();
    user.score = score;
    updateHighscores(user);
    // localStorage.setItem("score", JSON.stringify(user));
    renderHighscore();
  } else alert("Invalid Initials Input!");
});

// add event for clear the highscores
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("highscores");
  renderHighscore();
});

// add time deduct if answer is wrong
// add event for the back button
backBtn.addEventListener("click", function () {
  init();
});

// add event for view highscore botton

viewScoreBtn.addEventListener("click", function () {
  startPage.classList.add("hidden");
  highScorePage.classList.remove("hidden");
  renderHighscore();
});

init();
