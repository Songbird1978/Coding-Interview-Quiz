let startQuiz = document.querySelector("#start"); //linking new variable to the id of start (html)
let questionBox = document.querySelector("#questions"); //linking new variable to the id of questions (html)
let question = document.querySelector("#question-title"); //linking new variable to the id of question-title 
let choiceBox = document.querySelector("#choices"); //linking new variable to the id of choices
let endQuiz = document.querySelector("#end-screen"); //linking new variable to the end screen
let score = 0;
let clickListener = 0;

var continueQuiz = function (questionIndex) { //continueQuiz is a function that works with the questionData array (index)

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
                score++;
                clickListener++;
                console.log("score = " + score);
                alert("That's correct!"); //

            } else {
                console.log('incorrect'); //if it is not - it is incorrect 
                alert("That's incorrect!");
                clickListener++;
                console.log("score = " + score);

            } if (clickListener === questionData.length) {

                alert("You got " + score + " out of " + questionData.length);
        
                console.log("end");

                endQuiz();
            };
        

            choiceBox.removeChild(list); //removes the question that was previously displayed
            continueQuiz(questionIndex + 1); //replaces with the next question in the index of questions   

        });
    };


    choiceBox.appendChild(list); //appending the choiceBox (choices) to the list element 

    

}





startQuiz.addEventListener("click", function () { //creating an event listener for the click which runs a function

    questionBox.classList.remove("hide") //removing the class list property of hide - showing the questions to be answered

    continueQuiz(0); //runs the first function startQuiz

});


endQuiz = function () {


    questionBox.classList.add("hide") //removing the class list property of hide - showing the end screen
    //choiceBox.removeChild(list);
    console.log("endquiz");

};


var startTimer = function(){
    
};












