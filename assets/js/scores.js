var highScoreList = document.querySelector("#highscores"); //linking to highscores ordered list HTML



const li = document.createElement("li"); //creates a list element on the document

highscores.appendChild(li); //appends a child to the highscores parent


var retrievedObject = localStorage.getItem('userInfo'); //creates a variable to store retrieved info

console.log('retrievedObject: ', (retrievedObject)); 

li.textContent = ('User Info: ', (retrievedObject)); //adds the information to the list

