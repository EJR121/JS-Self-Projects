let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates random number
const generateTarget = () => {
    return Math.floor(Math.random() * 10); // Generates number 0 to 9 randomly
}

// Calculates absolute distance between two numbers
const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1 - number2);
}

// Compare guesses between human and computer, determine the winner
const compareGuesses = (human, computer, secretNumberGuess) => {
    if (human < 0 || human > 9) {
        alert("Your guess is out of range. Please enter a number between 0 and 9.");
        return;
    }

    const humanDifference = getAbsoluteDistance(secretNumberGuess, human);
    const computerDifference = getAbsoluteDistance(secretNumberGuess, computer);

    if (human === computer || humanDifference < computerDifference) {
        return true; // human wins or ties
    } else {
        return false; // computer wins
    }
}

// Updates the score of the game
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// Example usage:
const secretNumber = generateTarget();
const humanGuess = 5; // Assume human guess is 5
const computerGuess = 3; // Assume computer guess is 3

if (compareGuesses(humanGuess, computerGuess, secretNumber)) {
    updateScore('human');
} else {
    updateScore('computer');
}

// Updates the Rounds number
const advanceRound = () => {
    currentRoundNumber++;
}
