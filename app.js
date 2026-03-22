// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");
// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// // var saveComp;
// // const genCompChoice = () => {
// //     const options = ["rock", "paper", "scissor"];
// //     const randIdx = Math.floor(Math.random() * 3);
// //     saveComp = randIdx();
// //     console.log(saveComp);
// //     return options[randIdx];
//     // rock , paper , scissor 
// // 

// var saveCompChoice; // Declare a global variable to store the choice

// const genCompChoice = () => {
//     const options = ["rock", "paper", "scissor"];
//     const randIdx = Math.floor(Math.random() * 3);
//     saveCompChoice = options[randIdx]; // Store the choice
//     console.log("Computer choice saved:", saveCompChoice);
//     return saveCompChoice;
// };

// const playGame = (userChoice) => {
//     console.log("User choice:", userChoice);

//     // Generate and store computer choice
//     const compChoice = genCompChoice();
    
//     // Display the computer's choice to the user
//     console.log("Computer choice:", compChoice);
//     msg.innerText = `Computer chose ${compChoice}`;
// };


// const drawGame = () =>{
//     msg.innerText = "Game was Draw , play again";
//     msg.style.backgroundColor = "#081b31";
// } 

// const showWinner = (userWin , userChoice, compChoice) => {
//     if(userWin) {
//         userScore++;
//         userScorePara.innerText = userScore;
//         msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     }else{
//         compScore++;
//         compScorePara.innerText = compScore;
//         msg.innerText = `You Lose! ${compChoice} beats yous ${userChoice}`;
//         msg.style.backgroundColor="red";
//     }
// }

// // const playGame = (userChoice) => {
// //     console.log("user choice =" , userChoice);
//     //Generate computer choice
//     // const compChoice = genCompChoice();
//     // console.log("comp choice = " , compChoice);

//     if(userChoice === compChoice){
//         //Draw Game
//         drawGame();
//     }else{
//         let userWin = true;
//         if(userChoice === "rock"){
//             //scissor , paper 
//             userWin = compChoice === "paper" ? false : true;
//         }else if(userChoice === "paper"){
//             //rock , scissor 
//             userWin = compChoice === "scissors" ? false : true;
//         }else{
//             //rock ,paper 
//             userWin = compChoice ==="rock" ? false : true ;
//         }
//             showWinner(userWin , userChoice , compChoice);

//     }
// // };

// choices.forEach((choice)=>{
//     choice.addEventListener("click", ()=> {
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

var saveCompChoice; // Global variable to store the computer's choice

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Use "scissors" consistently
    const randIdx = Math.floor(Math.random() * 3);
    saveCompChoice = options[randIdx]; // Store choice globally
    console.log("Computer choice saved:", saveCompChoice);
    return saveCompChoice;
};

const drawGame = (userChoice, compChoice) => {
    msg.innerText = `It's a draw! Both chose ${userChoice}`;
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice:", compChoice);

    // Display the computer's choice
    msg.innerText = `Computer chose ${compChoice}`;

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

// Add event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
