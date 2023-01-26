let startQuiz = document.querySelector("#start"); //linking new variable to the id of start (html)
let questionBox = document.querySelector("#questions"); //linking new variable to the id of questions (html)
let question = document.querySelector("#question-title"); //linking new variable to the id of question-title 
let choiceBox = document.querySelector("#choices"); //linking new variable to the id of choices

startQuiz.addEventListener("click", function(){ //creating an event listener for the click which runs a function
    
    questionBox.classList.remove("hide") //removing the class list property of hide - showing the questions to be answered
    
    question.textContent = questionData[0].question //defining the element question with a property of textContent as the questionData starting at the 1st element of the array 
    
    const list = document.createElement("ul"); // creating a new unordered list element in the html - the parent element - the question
   
    
    for (let i = 0; i < questionData[0].choices.length; i++){ //for loop looking at each element of the questionData array and looping through until the end 
        const li = document.createElement("li"); //then creating a list element as children of the ul
        //li.textContent = questionData[0].choices[i]; //defining the list element with a property of textContent as the array questionData (1st question and then the choices )
        list.appendChild(li); //appending the child to the list 
        const button = document.createElement("button");
        button.textContent = questionData[0].choices[i];
        li.appendChild(button);

    
    }

    choiceBox.appendChild(list); //appending the list element to the choiceBox
})