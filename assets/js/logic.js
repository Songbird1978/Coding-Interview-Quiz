let startQuiz = document.querySelector("#start"); //linking new variable to the id of start (html)
let questionBox = document.querySelector("#questions"); //linking new variable to the id of questions (html)
let question = document.querySelector("#question-title"); //linking new variable to the id of question-title 
let choiceBox = document.querySelector("#choices"); //linking new variable to the id of choices
let endQuiz = document.querySelector("#end-screen"); //linking new variable to the end screen
let score = 0;
let clickListener = 0;
let finalScore = document.querySelector("#final-score"); //linking new variable to the final score
let initials = document.querySelector("#initials"); //variable to link to initials 
let submit = document.querySelector("#submit");//links to submit 
let feedback = document.querySelector("#feedback"); //links to feedback element (I didn't need this)
//let highScoreList = document.querySelector("#highscores");
let submitButton = submit; //links to function
let userInfo = 0; //declares a new variable for setting local storage

var correctSound = new Audio('./assets/sfx/correct.wav'); //declares variable to store audio
var incorrectSound = new Audio('./assets/sfx/incorrect.wav'); //as above

var timeEl = document.querySelector(".timer"); //links to timer class element of document 
var mainEl = document.getElementById("time"); //links to ID

var secondsLeft = 30; //declares amount of time on clock - 30 seconds to start 

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () { //declares variable as a function for timer
        secondsLeft--; //the seconds should decrease 1 by 1 
        timeEl.textContent = secondsLeft + " seconds left until end of Quiz."; //displays on page

        if (secondsLeft <= 0) { //if seconds left are less than or equal to zero
            // Stops execution of action at set interval
            clearInterval(timerInterval); //clear the timer 
            // Calls function to clear timer
            finish(); //calls function to end quiz
        };

    }, 1000); //decrease by 1 second at a time (set interval)

};

var penaliseTime = function () { //function to deduct 10 seconds for a wrong answer 

    secondsLeft = secondsLeft - 10  //declares secondsleft as minus 10 seconds 

    if (secondsLeft <= 0) { //if the seconds left are less than or equal to zero ...
        finish(); //run function 
        clearInterval();//clear the timer 
    }

};



var continueQuiz = function (questionIndex) { //continueQuiz is a function that works with the questionData array (index)

    if (clickListener === questionData.length) { //listens for clicks by user to be equal to the question array length
        finish(); //run function 
        clearInterval(); //clear timer
        return; // return function (I don't know if this is needed)
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
                console.log('correct'); //testing of 
                correctSound.play(); //play the correct sound
                score++; //adds each correct answer to the score
                clickListener++; //records each answer click to track the end of the quiz
                console.log("score = " + score); //testing of ...

            } else {
                console.log('incorrect'); //if it is not - it is incorrect 
                incorrectSound.play(); //play the incorrect sound 
                clickListener++; //records each wrong answer click
                console.log("score = " + score); //testing of ...
                penaliseTime(); //run function 

            } if (clickListener === questionData.length) { //if cicks are equal to array of questions

                console.log("end"); //testing
                clearInterval(); //clear the function 

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

    setTime(); //run function 

});

finish = function () { //function to end the quiz 

    questionBox.classList.add("hide") //removing the class list property of hide - showing the end screen

    endQuiz.classList.remove("hide"); //display endquiz information
    console.log("endquiz"); //testing
    finalScore.textContent = score; //populate the finalscore element with the score 
    clearInterval(); //clear the timer 

};

// When the form is submitted

submitButton.addEventListener("click", function (event) { //listen to the click on the submit button 

    event.preventDefault(); // prevent default empty of form element 

    var userInfo = { //declare userInfo as new empty object to store entries
        initials: initials.value.trim(), // store the initials in the object
        score: score, //store the score in the object 
    };

    console.log(userInfo); //testing

    const li = document.createElement("li"); // create a list element (this isn't working )

    endQuiz.appendChild(li); //

    if (userInfo.initials === "") {
        li.textContent = ("You must enter your initials (Max 3)!"); //this doesn't work
        return;
    } else {
        li.textContent = ("You have saved your High Score of : " + score + " : " + userInfo.initials); // message to display 
    };

    window.localStorage.setItem("userInfo", JSON.stringify(userInfo)); //stores the user info in local storage 
    //window.localStorage.getItem("userInfo", JSON.parse(userInfo));

    return; //return the function 

});















