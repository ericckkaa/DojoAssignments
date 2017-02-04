var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
function mindTime(){
  if(MINUTE>30){
    HOUR++;
  }
  if(PERIOD=="AM"){
    console.log("It's almost " + HOUR + " in the morning");
  }
  else {
    console.log("It's almost " + HOUR + " in the evening");
  }
  if(MINUTE<30){
    if(PERIOD=="AM"){
    console.log("It's just after " + HOUR + " in the morning");
  }
    else {
      console.log("It's just after " + HOUR + " in the evening");
    }
  }
}
mindTime();
