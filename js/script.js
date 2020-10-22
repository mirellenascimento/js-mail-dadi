// var userEmail = document.getElementById("email").value;
// var emailMessage = document.getElementById("message");
var emailButton = document.getElementById("verificaButton");
var message = "Non sei ancora registrato... Ma puoi giocare lo stesso ;)"

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


});
