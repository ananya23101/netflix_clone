var button = document.getElementById('q1');
var answer = document.getElementById('qa-answer');
button.addEventListener('click', runEvent);
function runEvent(e){
   if(answer.style.display !== "none")
   {
    answer.style.display = "none";
   }
   else{
       answer.style.display = "block";
   }
}
var button2 = document.getElementById('q2');
var answer2 = document.getElementById('qa-answer1');

button2.addEventListener('click', runEvent1);
function runEvent1(e){
   if(answer2.style.display !== "none")
   {
    answer2.style.display = "none";
   }
   else{
       answer2.style.display = "block";
   }
}
var button3 = document.getElementById('q3');
var answer3= document.getElementById('qa-answer2');

button3.addEventListener('click', runEvent2);
function runEvent2(e){
   if(answer3.style.display !== "none")
   {
    answer3.style.display = "none";
   }
   else{
       answer3.style.display = "block";
   }
}
var button4 = document.getElementById('q4');
var answer4 = document.getElementById('qa-answer3');

button4.addEventListener('click', runEvent3);
function runEvent3(e){
   if(answer4.style.display !== "none")
   {
    answer4.style.display = "none";
   }
   else{
       answer4.style.display = "block";
   }
}
var button5 = document.getElementById('q5');
var answer5 = document.getElementById('qa-answer4');

button5.addEventListener('click', runEvent4);
function runEvent4(e){
   if(answer5.style.display !== "none")
   {
    answer5.style.display = "none";
   }
   else{
       answer5.style.display = "block";
   }
}
var button6= document.getElementById('q6');
var answer6 = document.getElementById('qa-answer5');

button6.addEventListener('click', runEvent5);
function runEvent5(e){
   if(answer6.style.display !== "none")
   {
    answer6.style.display = "none";
   }
   else{
       answer6.style.display = "block";
   }
}