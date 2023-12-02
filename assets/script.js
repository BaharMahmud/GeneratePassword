var generateBtn = document.querySelector("#generate");
 var passwordText1="";
 var symbol="!@#$%^&*()";
var number="0123456789";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var all="";
var question=undefined;
//Funtion to generate password.
function generatePassword(){
//choose the length of password
    question=window.confirm("Password must contain at least 8 to 128 characters" );

    if(question){
        var length= prompt("Type a lenght you would like your password to be.(It can be between 8 - 128)");
       //Include uppercase letters or not.
       if(length>8 && length<128){
        q2=confirm("Would you like to add uppercase letters?")  ;
          if(q2){
            passwordText1+=uppercase[ Math.floor(Math.random() * uppercase.length)];}
         //Iclude lowercase letters or not.
         q3=confirm("Would you like to add  lower letters?");
         if(q3){
            passwordText1+=lowercase[Math.floor(Math.random() * lowercase.length)];

}
//Include numbers or not.
    q4=confirm("Would you like to add  numeric character");
    if(q4){
        passwordText1+=number[Math.floor(Math.random() * number.length)]

    }
    //Include special characters/symbols.
       q5= confirm("Would you like to special character?");
        
        
        if(q5){

            passwordText1+=symbol[Math.floor(Math.random() * symbol.length)];
        }  
//Password with all the requirements is ready to be displayed.
question=confirm("Your password is generated");

if(question){
    while(passwordText1.length<length){
      if(q2==true && q3==true && q4==true && q5==true){
        all=lowercase+uppercase+symbol+number;
        passwordText1+=all[Math.floor(Math.random() * all.length)];
      }

      // Conditions if any of the requirements is/are denied.
      if(!q5){
      all=lowercase+uppercase+number;
      passwordText1+=all[Math.floor(Math.random() * all.length)];} 
    if(!q4){
      all=lowercase+uppercase+symbol;
      passwordText1+=all[Math.floor(Math.random() * all.length)];}
    if(!q3){
      all=number+uppercase+symbol;
      passwordText1+=all[Math.floor(Math.random() * all.length)];}

    if(!q2){
      all=number+lowercase+symbol;
      passwordText1+=all[Math.floor(Math.random() * all.length)];}
      
      

    }
    
  }


return passwordText1;
}
else{
  alert("Password must inlude min 8 to max 128 characters");
} 
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
  