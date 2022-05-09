// challenge1

function ageInDays() {
  var birthyear = prompt("what year were you born..");
  var calculate = (2022 - birthyear) * 365;
  var h1 = document.createElement("h1");
  // var textAnswer = document.createTextNode("your age" + calculate +"days old")
  h1.setAttribute("id", "ageInDays");
  h1.textContent = "your age" + calculate + "days old";
  // h1.appendChild(textAnswer)
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageInDays").remove();
}
// challenge2

const imageGenerator = () => {
  let img = document.createElement("img");
  img.setAttribute("src", "static/love.gif");
  img.setAttribute("alt", "loveimages");

  document.querySelector(".flex-box-container-2").append(img);
};

// challenge3
const rpsgame = (yourchoice) => {
  var humanChoice, botChoice;
  humanChoice = yourchoice.id;
  // console.log(yourchoice)
  // console.log('hum:',humanChoice)

  botChoice = numberChoice(randInt());
  // console.log("com:",botChoice)

  result = desideWinner(humanChoice, botChoice);
  // console.log(humanChoice,botChoice)
  console.log(result);

  message = finalMessage(result);
  // console.log(message)

  rpsFrontEnd(humanChoice, botChoice, message);
};

const randInt = () => Math.floor(Math.random() * 3);
// console.log(randInt())

const numberChoice = (number) => ["rock", "paper", "scissor"][number];

const desideWinner = (yourChoice, computerChoice) => {
  var dataBase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { paper: 1, scissor: 0.5, rock: 0 },
  };

  var yourScore = dataBase[yourChoice][computerChoice];
  var computerScore = dataBase[computerChoice][yourChoice];
  // console.log(dataBase['rock']['paper'])

  return [yourScore, computerScore];
};

const finalMessage = ([yourScore, computerScore]) => {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
};
const rpsFrontEnd = (humanImageChoice, computerImageChoice, finalMessage) => {
  var imageDataBase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humanDiv = document.createElement("div");
  humanDiv.setAttribute("id", "humandiv");
  var messageDiv = document.createElement("div");
  messageDiv.setAttribute("id", "message");
  var computerDiv = document.createElement("div");
  computerDiv.setAttribute("id", "computer");

  humanDiv.innerHTML =
    "<img src='" +
    imageDataBase[humanImageChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px blue;'>";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size:60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  computerDiv.innerHTML =
    "<img src='" +
    imageDataBase[computerImageChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px red;'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(computerDiv);
};
const newone = () => {
  location.reload();
  //new edition
};
//challenge4

let allButtons = document.getElementsByTagName("button");
//  console.log(allButtons[0].classList[1])

let copyButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyButtons.push(allButtons[i].classList[1]);
}
//  console.log(copyButtons)

const buttonColorChange = (yourSelection) => {
  return buttonRed(yourSelection.value);
  //  console.log(yourSelection.value)
  //  if (yourSelection.value ==='red'){
  //      buttonRed()
  //  }else if (yourSelection.value ==='green'){
  //      buttonGreen()
  //  }else if (yourSelection.value ==='reset'){
  //      buttonReset()
  //  }else if (yourSelection.value ==='random'){
  //      buttonRandom()
  //  }
};

const buttonRed = (color) => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    if (color === "red") {
      allButtons[i].classList.add("btn-danger");
    } else if (color === "green") {
      allButtons[i].classList.add("btn-success");
    } else if (color === "reset") {
      allButtons[i].classList.add(copyButtons[i]);
    } else if (color === "random") {
      allButtons[i].classList.add(copyButtons[Math.floor(Math.random() * 8)]);
    }
  }
};

//challenge 5
let blackjackgame = {
  you: { scoreSpan: "#my-row", div: "#your-box", score: 0 },
  dealer: { scoreSpan: "#dealer-row", div: "#dealer-box", score: 0 },
  card: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],
  cardvalues: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    Q: 10,
    J: 10,
    A: [1, 11],
  },
  'wins':0,
  'losses':0,
  'draw':0,
  'isStand':false,
  'turnOver':false,
};
const YOU = blackjackgame["you"];
const DEALER = blackjackgame["dealer"];

const playSound = new Audio("static/sounds/swish.m4a");
const win = new Audio("static/sounds/cash.mp3");
const loss = new Audio("static/sounds/aww.mp3");

document.querySelector("#hit-button").addEventListener("click", blackjackhit);

document.querySelector("#stand-button").addEventListener("click", dealerlogic);


document.querySelector("#deal-button").addEventListener("click", blackjackdeal);


function blackjackhit() {
    if(blackjackgame['isStand']===false){

      let card = randomvalue();
      totalScore(card, YOU);
      showScore(YOU);
      showCard(card, YOU);
    }
  }

function randomvalue() {
  let randomindex = Math.floor(Math.random() * 13);
  // console.log(blackjackgame['card'][randomindex])
  return blackjackgame["card"][randomindex];
}

const showCard = (card, activePlayer) => {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = "static/images/" + card + ".png";
    cardImage.setAttribute("class", "images");
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    playSound.play();
  }
};
function blackjackdeal() {
  if(blackjackgame['turnOver']===true){
    blackjackgame['isStand']=false

    // showResult(showWinner());
    //or
    //let winner=showWinner();
    // showResult(showWinner)


  let yourboxImages = document
    .querySelector("#your-box")
    .querySelectorAll("img");
  let dealerboxImages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");
  yourboxImages.forEach((i) => {
    i.remove();
  });
  dealerboxImages.forEach((i) => {
    i.remove();
  });

  YOU["score"] = 0;
  DEALER["score"] = 0;

  document.querySelector("#my-row").textContent=0;
  document.querySelector("#my-row").style.color='white';

  document.querySelector("#dealer-row").textContent=0;
  document.querySelector("#dealer-row").style.color='white';

  document.querySelector("#black-jack-result").textContent="Let's play"
  document.querySelector("#black-jack-result").style.color="black"
  blackjackgame['turnOver']=true
}
}

function totalScore(card, activePlayer) {
  if (card === "A") {
    if (activePlayer["score"] + blackjackgame["cardvalues"][card][1] <= 21) {
      activePlayer["score"] += blackjackgame["cardvalues"][card][1];
    } else {
      activePlayer["score"] += blackjackgame["cardvalues"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackgame["cardvalues"][card];
  }
  // console.log(activePlayer['score'])
}
function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve,ms))
}

 async function dealerlogic() {
  blackjackgame['isStand']=true;
  while(DEALER['score'] < 16 && blackjackgame['isStand']===true){

    let card = randomvalue();
    totalScore(card, DEALER);
    showScore(DEALER);
    showCard(card, DEALER);
    await sleep(1000)
  }

   
      blackjackgame['turnOver']=true
      let winner=showWinner()
      showResult(winner)
        
}

function showWinner(){
    let winner;
    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
            blackjackgame['wins']++;
            winner=YOU

        }else if(YOU['score'] < DEALER['score']){
          blackjackgame['losses']++;
            winner=DEALER
        }else if(YOU['score'] === DEALER['score']){
          blackjackgame['draw']++;
            
        }

    }else if(YOU['score'] >= 21 && DEALER['score'] >= 21){
      blackjackgame['draw']++;
    }else if(YOU['score'] > 21 && DEALER['score'] >=21){
      blackjackgame['losses']++;
      winner=DEALER
    }
    // console.log(blackjackgame)
    return winner
}

function showResult(winner){
  if(blackjackgame['turnOver'] === true){

    let message,messagecolor;
    if(winner === YOU){
      document.querySelector("#Wins").textContent=blackjackgame['wins']
        message='you won';
        messagecolor='green';
        win.play();
    }else if(winner === DEALER){
      document.querySelector("#Losses").textContent=blackjackgame['losses']
        message='you loss';
        messagecolor='red';
        loss.play();

    }else{
       document.querySelector("#Draws").textContent=blackjackgame['draw']
        message='you drew';
        messagecolor='yellow' 
    }
    document.querySelector('#black-jack-result').textContent=message;
    document.querySelector('#black-jack-result').style.color=messagecolor;
  }
}
