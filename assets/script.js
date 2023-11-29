// Assignment Code
var generateBtn = document.querySelector("#generate");
 var passwordText1="";
 var passwordLenght=Math.floor(Math.random()*128)+8;
 var symbol="!@#$%^&*()";
var number="0123456789";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var chars=symbol+number+lowercase+uppercase

 function generatePassword(){
  var q1=window.confirm("Password must contain at least 8 to 128 characters", );
 
 if(q1){
  q2=window.confirm("Password must contain at least 1 Uppercase character");
  passwordText1+=uppercase + Math.floor(Math.random() * uppercase.length);
  if(q2)
  q3=window.confirm("Password must contain at least 1 Lowercase character");
  passwordText1+=lowercase + Math.floor(Math.random() * lowercase.length);
  if(q3)
  q4=window.confirm("Password must contain at least 1 numeric character");
  passwordText1+=number + Math.floor(Math.random() * number.length);
 if(q4)
  q5=window.confirm("Password must contain at least 1 special character");
  passwordText1+=symbol + Math.floor(Math.random() * symbol.length);
 if(q5){
  while ( passwordLenght>passwordText1.length){
    var randomNumber = Math.floor(Math.random() * chars.length);
    passwordText1=char+char.substring(randomNumber+randomNumber+1);}


}

return passwordText1;}
  else{
    window.alert("You password won't meet the requirements");
  }
  
  
 


}

// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword());
