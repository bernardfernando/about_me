"use strict";

console.log("javascript working")

// arays
const promptQ = [
    "What is my name  <please click OK after entering your answer>",
    "What is the name of the city I live in  <please click OK after entering your answer>",
    "What is the name of the village I live in  <please click OK after entering your answer>",
    "What is the instrument I am trying to learn  <please click OK after entering your answer>"
 ];

 const promtAnswer = ["bernard", "norwich", "cawston", "guitar"];

const incorrectAnsShort = [
    "my name is Bernard",
    "I live in Norwich",
    "I live in picturesque Cawston",
    "I am learning the guitar"
];

   function conditionalPart(answer,promptQuestion, answer2, correctAns) {
    console.log(answer);
    if(answer ==="yes" || answer ==="y") {
        console.log(answer);
        let  myName = prompt(promptQuestion).toLowerCase();
         console.log(myName);
         if(myName === answer2 ){
             alert("Yes " + correctAns + " your are correct, excellent");
         }
         else alert("Thanks for the attempt, but " + correctAns);
     }
     if (answer === "no" || answer === "n") {
         alert("Thanks, " + correctAns)
     }

   }


function question(string) {
    let answer;
    while(answer != "yes" && answer !="No" && answer != "y" &&  answer != "n") {
        answer  = prompt(string).toLowerCase(); 
        console.log(answer);
        
    }
    return answer;
}



function user() {
    let user = prompt("Hi Welcome! please enter your name <and click OK>");
    console.log(user);
    alert(user + ", Thank you so much for visiting my webpage, I am encouraged")
}



/* Quiz 1 name  */

function quiz1() {
   const answer = question("Do you know my name, unless I get a correct answer you are asked to do that - lol");
   conditionalPart(answer, promptQ[0],promtAnswer[0],incorrectAnsShort[0]);
}

/* Quiz 2 City   */

function quiz2() {
 
   const answer = question("Do you know where I live, unless I get a correct answer you are asked to do that - lol");
   conditionalPart(answer, promptQ[1],promtAnswer[1],incorrectAnsShort[1]);
}

/* Quiz 3 village  */

function quiz3() {
        
   const answer = question("Do you know the Village I live, unless I get an acceptable answer I keep asking you - lol");
   conditionalPart(answer, promptQ[2],promtAnswer[2],incorrectAnsShort[2]);
}


/* Quiz 4 */
function quiz4() {
    const answer = question("Do you know the music instrument I am learning, I want an acceptable answer - lol");
    conditionalPart(answer, promptQ[3],promtAnswer[3],incorrectAnsShort[3])

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
        alert(my_fruit[i]) + '\r';
        console.log('$my_fruit[z]');
        console.log('\r');
    }
}


