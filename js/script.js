// var userEmail = document.getElementById("email").value;
// var emailMessage = document.getElementById("message");
var emailButton = document.getElementById("verificaButton");
var message = "Non sei ancora registrato... Ma puoi giocare lo stesso ;)"
var startButton = document.getElementById("iniziaPartita");
var computerResult = document.getElementById("giocoComputer");
var userResult = document.getElementById("giocoUser");
var playButton = document.getElementById("gioca");
var finalResult = document.getElementById("resultado");
var restartButton = document.getElementById("reinizia");





MIN_NUMBER = 1;
MAX_NUMBER = 6;
var computer = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
var player = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);


var emailList = ["email1", "email2", "email3", "email4", "email5", "email6", "email7", "email8", "email9", "email10"];

emailButton.addEventListener("click", function(){
  var userEmail = document.getElementById("email").value;
  console.log(userEmail);

  for (var i = 0; i < emailList.length; i++){
    console.log(emailList[i]);

    if (emailList[i] == userEmail){
      message = "Abbiamo trovato il tuo registro! Possiamo divertirci insieme ;)"
    } else {
    }
  }
  document.getElementById("message").innerHTML = message;

  startButton.style.display = "block";
});

startButton.addEventListener("click", function(){
  computerResult.innerHTML = computer;
  playButton.style.display = "block";
});

playButton.addEventListener("click", function(){
  userResult.innerHTML = player;

  if (player > computer){
    finalResult.innerHTML = "Hai vinto!";
  } else if (player < computer){
    finalResult.innerHTML = "Hai perso!";
  } else {
    finalResult.innerHTML = "È stato un pareggio!";
  }

  restartButton.style.display = "block";
});
