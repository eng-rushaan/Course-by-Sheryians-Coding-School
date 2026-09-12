// if, else, else if, switch-case, early return pattern
// else if blocks can be unlimited




//-----------------------------

 if(loggedin && admin) {

 }
 else if(loggedin){

 }
 else{

 }

 //-----------------------------

 switch(2) {
  case 1:
    console.log("case 1");
    break;
  case 2:
    console.log("case 2");
    break;
  case 3:
    console.log("case 3");
    break;
 }

 //--------------------------------

 function getVal(val) {
  if (val < 25) return "D";
  else if (val < 50) return "C";
  else if (val < 75) return "B";
  else return "A";
 }

 getVal(42)


 //--------------------(practice)

 function getGrade(score) {
  if (score >= 90 && score <= 100) return "A+";
  if (score >= 80 && score <= 89) return "A";
  if (score >= 70 && score <= 79) return "B";
  if (score >= 60 && score <= 69) return "C";
  if (score >= 33 && score <= 59) return "D";
  if (score >= 0 && score <= 32) return "Fail";
  return "Invalid Marks  ❌";
}

console.log(getGrade(66)); // C