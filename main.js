const questionsArray = [
{
question : "2010 World Cup winner ?" ,
options : [ 
"https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428__480.png",
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png", 
"https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531__340.png "
] ,
answer :"https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428__480.png"
} ,

{
question : "2002 World Cup winner ?" ,
options : [
"https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531_960_720.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/16/portugal-162394__480.png", 
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_960_720.png" ,
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png"
] ,
answer : "https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531_960_720.png"
} , 

{
question : "2006 World Cup Winner ?" ,
options : [
"https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png",
"https://cdn.pixabay.com/photo/2015/11/12/15/52/flag-1040530__340.png"
],
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png"
} ,

{
question: "2010 World Cup host ?" ,
options: [
"https://cdn.pixabay.com/photo/2012/04/10/23/12/russia-26896__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/14/bulgaria-162254__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/17/south-africa-162425__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png"
],
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/17/south-africa-162425__340.png"
},

{
question: "World cup winning record nation ?" ,
options: [
"https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__480.png",
"https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531__340.png",
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png"
],
answer : "https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531__340.png"
},

{
question: "2002 World cup host ?" ,
options: [
"https://cdn.pixabay.com/photo/2013/07/13/14/15/japan-162328__480.png",
"https://cdn.pixabay.com/photo/2016/10/27/12/55/turkish-flag-1774834__340.png",
"https://cdn.pixabay.com/photo/2017/10/31/23/52/greece-2906823__340.png",
"https://cdn.pixabay.com/photo/2012/04/10/23/24/mexico-26989__480.png"
],
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/15/japan-162328__480.png"
},

{
question: "Euro 2004 Champion ?" ,
options: [
"https://cdn.pixabay.com/photo/2017/10/31/23/52/greece-2906823__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png",
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png"
],
answer : "https://cdn.pixabay.com/photo/2017/10/31/23/52/greece-2906823__340.png"
},

{
question: "Euro 2008 Champion ?" ,
options: [
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428__480.png" ,
"https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png"
],
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428__480.png"
},

{
question: "The loser in Euro 2008 final ?" ,
options: [
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png",
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png"
],
answer : "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png"
},

{
question: "The loser in 2006 World Cup final ?" ,
options: [
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__480.png",
"https://cdn.pixabay.com/photo/2012/04/10/23/24/mexico-26989__480.png"
],
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png"
},

{
question: "The loser in 2010 world cup ?" ,
options: [
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png",
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png",
"https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531__340.png " 
],
answer : "https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png"
},

{
question: "1998 world cup winner ?" ,
options : [
"https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531__340.png " ,
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png"
] ,
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png"
},

{
question: "Euro 2000 winner ?" ,
options : [
"https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_960_720.png" ,
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png",
"https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png"
] ,
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png"
},

{
question: "Euro 2012 host ?" ,
options : [
"https://cdn.pixabay.com/photo/2014/02/03/20/48/flag-257636__340.png" ,
"https://cdn.pixabay.com/photo/2013/07/13/14/16/poland-162393__480.png" , 
"https://cdn.pixabay.com/photo/2013/07/13/14/16/norway-162381__480.png" ,
"https://cdn.pixabay.com/photo/2020/02/28/02/21/finland-4886331__340.png" ,
] ,
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/16/poland-162393__480.png"
},

{
question: "Euro 2016 host ?" ,
options : [
"https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png",
"https://cdn.pixabay.com/photo/2012/04/10/16/23/ukraine-26179__480.png" , 
"https://cdn.pixabay.com/photo/2015/11/04/14/07/flag-1022605__480.png" ,
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png"
] ,
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png"
},

{
question: "Euro 2016 winner ?" ,
options : [
"https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017__340.png" ,
"https://cdn.pixabay.com/photo/2013/07/13/14/16/portugal-162394__480.png" , 
"https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png",
"https://cdn.pixabay.com/photo/2013/07/13/14/17/spain-162428__480.png" ,
] ,
answer : "https://cdn.pixabay.com/photo/2013/07/13/14/16/portugal-162394__480.png"
}
];

let opt1 = document.getElementById("option1");
let opt2 = document.getElementById("option2");
let opt3 = document.getElementById("option3");
let opt4 = document.getElementById("option4");
let quiz = document.getElementById("quiz") ;
let pics = Array.from(document.getElementsByClassName("pics"));
let currentQuestion = document.getElementById("question");
let scoreShow = document.getElementById("score");

let current = 0 ;
let userScore = 0 ;
currentQuestion.innerText = questionsArray[current].question
scoreShow.innerText = `Score: ${userScore}`
opt1.src = questionsArray[current].options[0]
opt2.src = questionsArray[current].options[1]
opt3.src = questionsArray[current].options[2]
opt4.src = questionsArray[current].options[3]


function gameOver () {
quiz.style.display = "none" ;
question.style.display = "none" ;
scoreShow.style.marginTop = "40vh";
}

function rightAnswer () { 
    userScore += 100 ;
    scoreShow.innerText = `Score: ${userScore}` ;
    current++ ;
    if (current == questionsArray.length) return gameOver();
    currentQuestion.innerText = questionsArray[current].question;
    opt1.src = questionsArray[current].options[0];
    opt2.src = questionsArray[current].options[1];
    opt3.src = questionsArray[current].options[2];
    opt4.src = questionsArray[current].options[3];
}

function wrongAnswer () {
    current++ ;
    if (current == questionsArray.length) return gameOver();
    currentQuestion.innerText = questionsArray[current].question ;
    opt1.src = questionsArray[current].options[0];
    opt2.src = questionsArray[current].options[1];
    opt3.src = questionsArray[current].options[2];
    opt4.src = questionsArray[current].options[3];
}

function getCountryFlagName (src = "") {
   return src.slice(src.lastIndexOf("/")+1 , src.lastIndexOf("-"));
}


function handleUserChoice () {
for(let el of pics) {
    el.addEventListener("click" , () => {
        if(el.src === questionsArray[current].answer) {
         el.classList.add("rightPick") ;
         return setTimeout(() => {
            rightAnswer();
            el.classList.remove("rightPick");
         } , 1000)
        } 
        el.classList.add("wrongPick") ;
         setTimeout(() => {
            wrongAnswer();
            el.classList.remove("wrongPick")
         } , 1000)
 }
 )
}
}

handleUserChoice();



















