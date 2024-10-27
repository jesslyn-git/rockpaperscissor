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


function getHumanChoice() {
    let sign = prompt(`Open your browser console by right click > Inspect > Console to play the Game. Refresh the restart. Input one of the following: 1 for Rock 2 for Paper 3 for Scissor`)
    // console.log("🚀 ~ getHumanChoice ~ sign:", sign)
    switch (sign) {
        case "1":
            console.log(`userInput: rock`)
            return `rock`
        case "2":
            console.log(`userInput: paper`)
            return `paper`
        case "3":
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


function playGame() {
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        console.log(`current round: ${i+1} of 5 total`)
        const humanSelect = getHumanChoice()
        const computerSelect = getComputerChoice()
        console.log(`computer: ${computerSelect}`);
        const perRound = playRound(computerSelect, humanSelect)
    if (perRound === `Win`) {
        humanScore += 1
        console.log(`your score: ${humanScore} VS computer score: ${computerScore}`)
    } else if (perRound === `Lose`) {
        computerScore += 1
        console.log(`your score: ${humanScore} VS computer score: ${computerScore}`)
    }
    else if (perRound === `Draw`) {
        console.log(`your score: ${humanScore} VS computer score: ${computerScore}`)
        continue
    }
    else {console.log(`Error nich`)}
    }

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

playGame(playRound)