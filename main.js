//Where the answer goes
const questionP = document.getElementById("QuestionP");
//Where the question goes
const answerP = document.getElementById("AnswerP");
//Basically our whole screen
const container = document.getElementById("container");
//Previous questions index
var prevQuestion;
//Container for the button
const btnContainer = document.getElementById("btnContainer");
//Dynamically created Button
var button = document.createElement("button");
//Constant screen button
const rerollBtn = document.getElementById("rerollBtn");


//Where our questions will go
let qnaArray =
[ ["What makes a orange and oranges?", "It's color!"],
["What's 2 + 2?", "Not 2!"], 
["What's cool but never hot?", "A trick"] ];

//Where the used questions will go
let qnaUsedArray =[];

function displayQuestion()
{
  //Get the length of our qnaArray 
  let qnalen = qnaArray.length;
  //Get a random number within the qnaArray
  let choiceOfQuestion = Math.floor(Math.random() * qnalen);

  while (choiceOfQuestion == prevQuestion)
  {
    //Keep rerolling until you don't get a dupe answer
    choiceOfQuestion = Math.floor(Math.random() * qnalen);
  }

  //Based on Math.rand retrieve that qna question
  let retrievedQuestion = qnaArray[choiceOfQuestion];

  //Change the inner HTML of our elements to the correct question and answer
  questionP.innerHTML = retrievedQuestion[0];
  answerP.innerHTML = retrievedQuestion[1];

  //Add the question and answer to the UsedArray
  qnaUsedArray.push(qnaArray[choiceOfQuestion]);
  
  //Remove from qnaArray
  qnaArray.splice(choiceOfQuestion, choiceOfQuestion);

  //Remove later
  console.log(qnalen);

  //Get previous question to avoid repeats
  prevQuestion = choiceOfQuestion;
}

function resetQuestions()
{
  //Make the empty array full
  qnaArray = qnaUsedArray;
  //Make the full array empty
  qnaUsedArray = [];
  //Remove button from screen
  btnContainer.removeChild(button);
  //Readd reroll button
  btnContainer.appendChild(rerollBtn);
  //Reroll a question
  displayQuestion();
}

rerollBtn.addEventListener("click", function() {
  let qnalen = qnaArray.length;
  questionP.innerHTML = "";
  answerP.innerHTML = "";

  displayQuestion();

  if (qnalen == 1)
  {
    //Display on screen
    document.getElementById("header").innerHTML = "Last Question Displayed. Reset to see again!";
    //Button inner HTML
    button.innerHTML = "Reset Button!";
    questionP.innerHTML = "";
    answerP.innerHTML = "";
    //Adds button to the screen
    btnContainer.appendChild(button);
    //Unadded the reroll button
    btnContainer.removeChild(rerollBtn);
  }

});

button.addEventListener("click", resetQuestions);

