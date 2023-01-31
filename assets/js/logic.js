let startQuiz = document.querySelector("#start"); //linking new variable to the id of start (html)
let questionBox = document.querySelector("#questions"); //linking new variable to the id of questions (html)
let question = document.querySelector("#question-title"); //linking new variable to the id of question-title 
let choiceBox = document.querySelector("#choices"); //linking new variable to the id of choices
let endQuiz = document.querySelector("#end-screen"); //linking new variable to the end screen
let score = 0;
let clickListener = 0;
let finalScore = document.querySelector("#final-score"); //linking new variable to the final score
let initials = document.querySelector("#initials");
let submit = document.querySelector("#submit");
let feedback = document.querySelector("#feedback");
//let highScoreList = document.querySelector("#highscores");
let submitButton = submit;
let userInfo = 0;

var correctSound = new Audio('./assets/sfx/correct.wav');
var incorrectSound = new Audio('./assets/sfx/incorrect.wav');

var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("time");

var secondsLeft = 30;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left until end of Quiz.";

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to clear timer
            finish();
        };

    }, 1000);

};

var penaliseTime = function () {

    secondsLeft = secondsLeft - 10

    if (secondsLeft <= 0) {
        finish();
        clearInterval();
    }

};



var continueQuiz = function (questionIndex) { //continueQuiz is a function that works with the questionData array (index)

    if (clickListener === questionData.length) {
        finish();
        clearInterval();
        return;
    }

    question.textContent = questionData[questionIndex].question; //defining the element question with a property of textContent as the questionData starting at the 1st element of the array 

    const list = document.createElement("ul"); // creating a new unordered list element in the html - the parent element - the question

    for (let i = 0; i < questionData[questionIndex].choices.length; i++) { //for loop looking at each element of the questionData array and looping through until the end 
        const li = document.createElement("li"); //then creating a list element as children of the ul
        //li.textContent = questionData[0].choices[i]; //defining the list element with a property of textContent as the array questionData (1st question and then the choices )
        list.appendChild(li); //appending the child to the list 
        const button = document.createElement("button"); //creating a variable for the answer button 
        button.textContent = questionData[questionIndex].choices[i]; //linking the text of the question (questionData array) and the choices div to the answer buttons 
        li.appendChild(button); //appending the button as a child of the ul
        button.setAttribute('id', 'answerbutton');//setting an id of answer for the answer buttons 


        button.addEventListener("click", function () { //add function for click answer

            if (questionData[questionIndex].choices[i] === questionData[questionIndex].correct) { //requires the choice to be equal to the correct answer
                console.log('correct');
                correctSound.play();
                score++; //adds each correct answer to the score
                clickListener++; //records each answer click to track the end of the quiz
                console.log("score = " + score);

            } else {
                console.log('incorrect'); //if it is not - it is incorrect 
                incorrectSound.play();
                clickListener++; //records each wrong answer click
                console.log("score = " + score);
                penaliseTime();

            } if (clickListener === questionData.length) {

                console.log("end");
                clearInterval();

                finish();
            };


            choiceBox.removeChild(list); //removes the question that was previously displayed
            continueQuiz(questionIndex + 1); //replaces with the next question in the index of questions               

        });
    };

    choiceBox.appendChild(list); //appending the choiceBox (choices) to the list element 
}

startQuiz.addEventListener("click", function () { //creating an event listener for the click which runs a function

    questionBox.classList.remove("hide"); //removing the class list property of hide - showing the questions to be answered

    continueQuiz(0); //runs the first function startQuiz

    setTime();

});

finish = function () {

    questionBox.classList.add("hide") //removing the class list property of hide - showing the end screen

    endQuiz.classList.remove("hide");
    console.log("endquiz");
    finalScore.textContent = score;
    clearInterval();

};

// When the form is submitted

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    var userInfo = {
        initials: initials.value.trim(),
        score: score,
    };

    console.log(userInfo);

    const li = document.createElement("li");

    endQuiz.appendChild(li);

    if (userInfo.initials === "") {
        li.textContent = ("You must enter your initials (Max 3)!");
        return;
    } else {
        li.textContent = ("You have saved your High Score of : " + score + " : " + userInfo.initials);
    };

    window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
    //window.localStorage.getItem("userInfo", JSON.parse(userInfo));

    return;

});















