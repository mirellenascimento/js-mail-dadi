// Buttons
var emailButton = document.getElementById("verificaButton");
var startButton = document.getElementById("iniziaPartita");
var restartButton = document.getElementById("reinizia");

// Messages
var verMessage = document.getElementById("emailMessage");
var computerResult = document.getElementById("giocoComputer");
var userResult = document.getElementById("giocoUser");
var finalResult = document.getElementById("resultado");

// Email verification
var emailList = ["email1", "email2", "email3", "email4", "email5", "email6", "email7", "email8", "email9", "email10"];
var message = "Non sei ancora registrato... Ma puoi giocare lo stesso ;)"

// Dices
MIN_NUMBER = 1;
MAX_NUMBER = 6;
var computer = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
var player = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);


var emailEnter = document.getElementById("email");
emailEnter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   emailButton.click();
  }
});

// Email verification button action
emailButton.addEventListener("click", function(){
  var userEmail = document.getElementById("email").value;
  console.log(userEmail);

  for (var i = 0; i < emailList.length; i++){
    console.log(emailList[i]);

    if (emailList[i] == userEmail){
      message = "Abbiamo trovato il tuo account! Possiamo divertirci insieme ;)"
      verMessage.style.color = "blue";
    } else {
    }
  }
  verMessage.innerHTML = message;
  document.getElementById("game").style.display = "block";
  startButton.style.display = "block";
});

// Game action
startButton.addEventListener("click", function(){
  document.getElementById("gameStart").style.display = "flex";
  computerResult.className = "dado0" + computer;
  userResult.className = "dado0" + player;

// Game result
  document.getElementById("gameEnd").style.display = "block";
  document.getElementById("gameEnd").className = "show";

  if (player > computer){
    finalResult.innerHTML = "Hai vinto!";
    finalResult.style.color = "blue";
  } else if (player < computer){
    finalResult.innerHTML = "Hai perso!";
    finalResult.style.color = "red";
  } else {
    finalResult.innerHTML = "È stato un pareggio!";
    finalResult.style.color = "grey";
  }

  restartButton.style.display = "block";
});

// Restart game action
restartButton.addEventListener("click", function(){
  window.location.reload(false);
})
