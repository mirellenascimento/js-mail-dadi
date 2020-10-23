var emailButton = document.getElementById("verificaButton");
var verMessage = document.getElementById("emailMessage");
var startButton = document.getElementById("iniziaPartita");
var computerResult = document.getElementById("giocoComputer");
var userResult = document.getElementById("giocoUser");
var playButton = document.getElementById("gioca");
var finalResult = document.getElementById("resultado");
var restartButton = document.getElementById("reinizia");
var okButton = document.getElementById("ok");





MIN_NUMBER = 1;
MAX_NUMBER = 6;
var computer = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
var player = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);



var emailList = ["email1", "email2", "email3", "email4", "email5", "email6", "email7", "email8", "email9", "email10"];
var message = "Non sei ancora registrato... Ma puoi giocare lo stesso ;)"




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






startButton.addEventListener("click", function(){
  document.getElementById("computerPlays").style.display = "block";
  computerResult.innerHTML ="Il computer ha tirato: " + computer;
  okButton.style.display = "block";
});

okButton.addEventListener("click", function(){
  // document.getElementById("userPlays").style.display = "block";
  document.getElementById("adessoMessage").style.display = "block";
  playButton.style.display = "block";
});



playButton.addEventListener("click", function(){
  userResult.innerHTML ="Tu hai tirato: " + player;
  document.getElementById("gameEnd").style.display = "block";

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

restartButton.addEventListener("click", function(){
  window.location.reload(false);
})
