var highScoreList = document.querySelector("#highscores"); //linking to highscores ordered list HTML

//function renderHighScores() {

//var userInfo = JSON.parse(localStorage.getItem('userInfo'));

const li = document.createElement("li");

highscores.appendChild(li);


//var userInfoRetrieve = JSON.parse(localStorage.getItem("userInfo"));


//li.textContent = userInfoRetrieve;

var retrievedObject = localStorage.getItem('userInfo');

console.log('retrievedObject: ', (retrievedObject));

li.textContent = ('User Info: ', (retrievedObject));

/*userInfo = JSON.parse(localStorage.getItem("userInfo"));
for (var i = 0; i < userInfo.length; i++) {
   
    console.log("userInfo");
    
    li.textContent =  userInfo;

};



//console.log(KeyName);
*/