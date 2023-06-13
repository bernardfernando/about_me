console.log("javascript working")

function user() {
    let user = prompt("Hi Welcome! please enter your name <and click OK>");
    console.log(user);
    alert(user + ", Thank you so much for visiting my webpage, I am encouraged")
}



function quiz1() {
    let answer;
        while(answer != "yes" && answer !="No" && answer != "y" &&  answer != "no") {
            answer  = prompt("do you know my name, unless I get a correct answer you are asked to do that - lol") .toLowerCase(); 
            console.log(answer);
    }
   

if(answer ==="yes" || answer ==="y") {

   let  myName = prompt("what is my name  <please click OK after entering your answer>").toLowerCase();
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


