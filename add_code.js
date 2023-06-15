"use strict";

console.log("javascript working")


function user() {
    let user = prompt("Hi Welcome! please enter your name <and click OK>");
    console.log(user);
    alert(user + ", Thank you so much for visiting my webpage, I am encouraged")
}


/* Quiz 1 name  */

function quiz1() {
    let answer;
        while(answer != "yes" && answer !="No" && answer != "y" &&  answer != "no") {
            answer  = prompt("Do you know my name, unless I get a correct answer you are asked to do that - lol") .toLowerCase(); 
            console.log(answer);
    }
   

if(answer ==="yes" || answer ==="y") {

   let  myName = prompt("What is my name  <please click OK after entering your answer>").toLowerCase();
    console.log(myName);
    if(myName ==="bernard" ){
        alert("Yes my name is Bernard your are correct, excellent");
    }
    else alert("Thanks for the attempt, my name is Bernard");
}
if (answer === "no") {
    alert("Thanks, my name is Bernard and nice to meeet you")
}

}

/* Quiz 2 City   */

function quiz2() {
    let answer2;
        while(answer2 != "yes" && answer2 !="No" && answer2 != "y" &&  answer2 != "no") {
            answer2  = prompt("Do you know where I live, unless I get a correct answer you are asked to do that - lol") .toLowerCase(); 
            console.log(answer2);
    }
   

if(answer2 ==="yes" || answer2 ==="y") {

   let  myCity = prompt("What is the name of the city I live in  <please click OK after entering your answer>").toLowerCase();
    console.log(myCity);
    if(myCity ==="norwich" ){
        alert("Yes the city I live in is correct, It is Norwich weldone");
    }
    else alert("Thanks for the attempt, I actually live in Norwich");
}
if (answer2 === "no") {
    alert("Thanks, you made an effort, I live in Norwich")
}

}

/* Quiz 3 village  */

function quiz3() {
    let answer3;
        while(answer3 != "yes" && answer3 !="No" && answer3 != "y" &&  answer3 != "no") {
            answer3  = prompt("Do you know the Village I live, unless I get an acceptable answer I keep asking you - lol") .toLowerCase(); 
            console.log(answer3);
    }
   

if(answer3 ==="yes" || answer3 ==="y") {

   let  myVillage = prompt("What is the name of the village I live in  <please click OK after entering your answer>").toLowerCase();
    console.log(myVillage);
    if(myVillage ==="cawston" ){
        alert("Yes the village I live in is correct, weldone");
    }
    else alert("Thanks for the attempt, I actually live in Cawston");
}
if (answer3 === "no") {
    alert("Thanks, you made an effort, I live in picturesque Cawston")
}

}


/* Quiz 4 */
function quiz4() {
    let answer4;
        while(answer4 !="yes" && answer4 !="No" && answer4 !="y" &&  answer4 !="no") {
            answer4  = prompt("Do you know the music instrument I am learning, I want an acceptable answer - lol") .toLowerCase(); 
            console.log(answer4);
    }
   

if(answer4 ==="yes" || answer4 ==="y") {

   let  myInstrument = prompt("What is the instrument I am trying to learn  <please click OK after entering your answer>").toLowerCase();
    console.log(myInstrument);
    if(myInstrument ==="guitar" ){
        alert("Yes the instrument I learn is the guitar, your answer is correct, weldone");
    }
    else alert("Thanks for the attempt, I actually try learning the guitar");
}
if (answer4 === "no") {
    alert("Thanks, you made an effort, I am learning the guitar, thanks a million for your time")
}

}


function quiz5() {
    let i = 1;
    let myNumber = 20;

    
    for (i = 1; i < 6 ; i++)
    {   
        let guessMyNumber = prompt("Guess my number - you have 5 turns in total, This is no " + i);
        if (myNumber == guessMyNumber) 
        {   
        alert("Well done you guessed it correct, efforts " + i);
        }   else if (myNumber > guessMyNumber) { 
                alert("guessed is too small");
               
           
            }   else {
                alert("Gussed number is too big");
              
                }

    }

    if(myNumber != guessMyNumber) {

        alert(" Thanks for your time, Number was " + myNumber)
    } else alert("Your guess is spot on - Well done")
}

/* Array  for Q3    */
/* run two 'for loops' one for counting attempts and the other to display the fruit */

function my_favourite() {
let guess_count=0;
let y=0;

  const my_fruit = ['mango','grapes',"clementine",'kiwi','guava','orange', 'raspberry','strawberry','pineapple','apple'];
    
  for(y = 1; y < 5; y++) {
  
     /*   let guess_fruit = prompt("guess a fruit I like, in 5 attempts. This is no " + y).toLowerCase();*/
        let guess_fruit = prompt("guess fruit I like, attempt " + y);
          
     let i=0;
    for(i = 0; i < my_fruit.length; i++) {
        if(guess_fruit.toLowerCase() == my_fruit[i]) {
            alert(my_fruit[i] + "  is my favourite no  " + (i+1));
            guess_count = guess_count + 1;
            alert(guess_count + " out of 4");
            break;
        } 
        console.log(my_fruit[i]);
          
        }
    }

    alert("final_score is   " + guess_count +"  you are a star")

    /*  possible answers   */
    let z = 0;
    for(z=0; z < my_fruit.length;  z++) {
        alert(my_fruit[i]) + "\n";
        console.log('$my_fruit[z]');
        console.log('\n');
    }
}


