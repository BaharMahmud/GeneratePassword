// Assignment Code
var generateBtn = document.querySelector("#generate");
 var passwordText1="";
 var passwordLenght=Math.floor(Math.random()*128)+8;
 var symbol="!@#$%^&*()";
var number="0123456789";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var all=symbol + number + uppercase + lowercase;
//var chars=symbol.charAt(Math.floor(Math.random() * symbol.length)) + number.charAt(Math.floor(Math.random() * number.length)) + lowercase.charAt(Math.floor(Math.random() * lowercase.length)) + uppercase.charAt(Math.floor(Math.random() * uppercase.length));



function generatePassword(){
  onclick
  var q1=window.confirm("Password must contain at least 8 to 128 characters" );
 
 if(q1){
  var q2=confirm("Password must contain at least 1 Uppercase character");
  passwordText1+=uppercase[ Math.floor(Math.random() * uppercase.length)];
  if(q2){
  var q3=confirm("Password must contain at least 1 Lowercase character");
  passwordText1+=lowercase[Math.floor(Math.random() * lowercase.length)];

  if(q3){
  var q4=confirm("Password must contain at least 1 numeric character");
  passwordText1+=number[Math.floor(Math.random() * number.length)];


 if(q4){
  var q5=confirm("Password must contain at least 1 special character");

  passwordText1+=symbol[Math.floor(Math.random() * symbol.length)];

 if(q5){
 var q6=confirm("Your password is generated");
 while(passwordText1.length<passwordLenght){
  passwordText1+=all[Math.floor(Math.random() * all.length)];
 }
if (q6){
return passwordText1;
 }}}}}}
else{
  window.alert("You password won't meet the requirements");
}
 

 }
  
  
 




// Write password to the #password input
generateBtn.onclick=function writePassword () {
  var password =generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword());
