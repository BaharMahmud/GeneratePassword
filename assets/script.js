var generateBtn = document.querySelector("#generate");
 var passwordText1="";
 var symbol="!@#$%^&*()";
var number="0123456789";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var all="";


function generatePassword(){
var length =parseInt(prompt("Type a lenght you would like your password to be.(It can be between 8 - 128)"));

      if(!length){
        alert("Please provide the length for your password")
    }
     
  

  function ifLowerCasewasChosen(){
    if(confirm("Will this contain Lowercase letters?")){
    passwordText1+=lowercase[ Math.floor(Math.random() * lowercase.length)]
  }
else {
   lowercase="";
}

return passwordText1;}

  function ifUpperCasewasChosen(){
    if(confirm("Will this contain UpperCase letters?")){
    passwordText1+=uppercase[ Math.floor(Math.random() * uppercase.length)]
    }
  else{
    uppercase="";
  }

  return passwordText1;
  }
  


  function ifNumberCasewasChosen(){
    if(confirm("Will this contain numbers?")){
    passwordText1+=number[ Math.floor(Math.random() * number.length)]
  }
else{
    number="";
}
return passwordText1;
  }

  function ifSymbolCasewasChosenOrNot(){
    if(confirm("Will this contain special characters?")){
    passwordText1+=symbol[ Math.floor(Math.random() * symbol.length)]
  }
else{
    symbol="";
}
return passwordText1;
}

if(length>8 && length<128){   

ifLowerCasewasChosen();
ifUpperCasewasChosen();
ifNumberCasewasChosen();
ifSymbolCasewasChosenOrNot();
if(passwordText1.length==0)
alert("You must choose at leat one criteria.");
while(passwordText1.length<length){
    passwordText1+=(number+symbol+lowercase+uppercase)[[ Math.floor(Math.random() * (number+symbol+lowercase+uppercase).length)]]
    }
    return passwordText1;
   
}
else{
    alert("Password must inlude min 8 to max 128 characters");
}

}

 

generateBtn.onclick=function writePassword () {
    var password =generatePassword();
     var passwordText = document.querySelector("#password");
     
   passwordText.value=password;

   
     
    
     
     }
     
     // Add event listener to generate button
     
     generateBtn.addEventListener("click",writePassword());
     