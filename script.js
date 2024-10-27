// const prompt = require("prompt-sync")()

function getComputerChoice() {
    const computerChoice = (Math.floor(Math.random() * 3) + 1).toString()
    // console.log(computerChoice)
    switch (computerChoice) {
        case "1":

            return `rock`
        case "2":

            return `paper`

        case "3":

            return `scissor`

    }
}


function getHumanChoice(sign) {
    // let sign = prompt(`Open your browser console by right click > Inspect > Console to play the Game. Refresh the restart. Input one of the following: 1 for Rock 2 for Paper 3 for Scissor`)
    // console.log("🚀 ~ getHumanChoice ~ sign:", sign)
    switch (sign) {
        case "rock":
            console.log(`userInput: rock`)
            return `rock`
        case "paper":
            console.log(`userInput: paper`)
            return `paper`
        case "scissor":
            console.log(`userInput: scissor`)
            return `scissor`
    }
}

function playRound(computer, human) {
    switch (computer) {
        case "rock":
            if (human === "rock") {
                console.log(`Draw`)
                return `Draw`
            }
            if (human === "paper") {
                console.log(`Win`)
                return `Win`
            }
            if (human === "scissor") {
                console.log(`Lose`)
                return `Lose`
            }
        case "paper":
            if (human === "rock") {
                console.log(`Lose`)
                return `Lose`
            }
            if (human === "paper") {
                console.log(`Draw`)
                return `Draw`
            }
            if (human === "scissor") {
                console.log(`Win`)
                return `Win`
            }
        case "scissor":
            if (human === "rock") {
                console.log(`Win`)
                return `Win`
            }
            if (human === "paper") {
                console.log(`Lose`)
                return `Lose`
            }
            if (human === "scissor") {
                console.log(`Draw`)
                return `Draw`
            }
    }
}


let stateRound = 1
let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll(".button")
for (const i of buttons) {
    i.addEventListener("click", function (e) {
        let humanChoice = e.srcElement.value;
        const humanSelect = getHumanChoice(humanChoice)
        const computerSelect = getComputerChoice()
        console.log(`computer: ${computerSelect}`);
        const perRound = playRound(computerSelect, humanSelect)
        // console.log(perRound, 'perRound', stateRound, 'stateRound')

        if (perRound === `Win`) {
            humanScore += 1
            console.log(`your score: ${humanScore} VS computer score: ${computerScore}`)
        } else if (perRound === `Lose`) {
            computerScore += 1
            console.log(`your score: ${humanScore} VS computer score: ${computerScore}`)
        }
        else if (perRound === `Draw`) {
            console.log(`your score: ${humanScore} VS computer score: ${computerScore}`)

        }
        else {console.log(`Error nich`) }

        if (stateRound >= 5) {
            validateGame()
        }
        else {
            stateRound += 1;
            const round = document.querySelector(".current-round");
            round.textContent = "Round " + stateRound + " of 5";
            console.log(`round ${stateRound} of 5`)

            const recap = document.querySelector(".recap")
            recap.textContent = "Previous Round Recap"
            const userInput = document.querySelector(".user-input");
            userInput.textContent = "Your choice: "+humanChoice
            const computer = document.querySelector(".computer-choice");
            computer.textContent = "Computer choice: "+computerSelect
            const status = document.querySelector(".status")
            status.textContent = "Current round: "+perRound
            const score = document.querySelector(".score")
            score.textContent = `your score: ${humanScore} VS computer score: ${computerScore}`
        }
    }
    )
}

function validateGame(){
    if (humanScore > computerScore) {
        console.log(`you BEAT the game`)
        return
    }
    if (humanScore === computerScore) {
        console.log(`it is DRAW`);
        return
    }
    if (humanScore < computerScore) {
        console.log(`too bad you LOSE`);
        return
    }
}