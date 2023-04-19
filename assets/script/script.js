let userChoice = document.querySelector("#user-choice");
let compChoice = document.querySelector("#computer-choice");
let result = document.querySelector("#result");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let drawScore = document.querySelector("#drawScore");



// buttons
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");


// events
rockBtn.addEventListener("click", rockFunction);
paperBtn.addEventListener("click", paperFunction);
scissorsBtn.addEventListener("click", scissorsFunction);



// array
let botPick = ["Rock", "Paper", "Scissors"];


let pScore = 0;
let cScore = 0;
let dScore = 0;

let i = "";
function botSelect() {
    i = Math.floor(Math.random() * 3);
    return i;
}

function rockFunction() {
    userChoice.innerHTML = `<img src="/assets/images/rock.gif">`
    botSelect();

    if (i == 0) {
        compChoice.innerHTML = `<img src="/assets/images/rock.gif">`
        result.innerHTML = "It's a tie!"
        dScore++;
        drawScore.innerHTML = dScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`);

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }


    } else if (i == 1) {
        compChoice.innerHTML = `<img src="/assets/images/paper.gif">`
        result.innerHTML = "You Lose!"
        cScore++;
        computerScore.innerHTML = cScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

        

    } else if (i == 2) {
        compChoice.innerHTML =  `<img src="/assets/images/scissors.gif">`
        result.innerHTML = "You Win!"
        pScore++;
        playerScore.innerHTML = pScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

    }


}

function paperFunction() {
    userChoice.innerHTML = `<img src="/assets/images/paper.gif">`
    botSelect();

    if (i == 0) {
        compChoice.innerHTML = `<img src="/assets/images/rock.gif">`
        result.innerHTML = "You Win!"
        pScore++;
        playerScore.innerHTML = pScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

    } else if (i == 1) {
        compChoice.innerHTML = `<img src="/assets/images/paper.gif">`
        result.innerHTML = "It's a tie!"
        dScore++;
        drawScore.innerHTML = dScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

    } else if (i == 2) {
        compChoice.innerHTML =  `<img src="/assets/images/scissors.gif">`
        result.innerHTML = "You Lose!"
        cScore++;
        computerScore.innerHTML = cScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

    }
}

function scissorsFunction() {
    userChoice.innerHTML =  `<img src="/assets/images/scissors.gif">`
    botSelect();

    if (i == 0) {
        compChoice.innerHTML = `<img src="/assets/images/rock.gif">`
        result.innerHTML = "You Lose!"
        cScore++;
        computerScore.innerHTML = cScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

    } else if (i == 1) {
        compChoice.innerHTML = `<img src="/assets/images/paper.gif">`
        result.innerHTML = "You Win!"
        pScore++;
        playerScore.innerHTML = pScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

    } else if (i == 2) {
        compChoice.innerHTML = `<img src="/assets/images/scissors.gif">`
        result.innerHTML = "It's a tie!"
        dScore++;
        drawScore.innerHTML = dScore

        // create element
        let matchHistory = document.querySelector("#match-history");
        let paragraph = document.createElement("p");
        matchHistory.appendChild(paragraph);
        paragraph.innerHTML = (`${userChoice.innerHTML} vs ${compChoice.innerHTML} = ${result.innerHTML}`)

        let matchCount = matchHistory.childElementCount;
        if (matchCount == 8) {
            matchHistory.firstElementChild.remove();
        }

    }
}


