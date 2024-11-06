const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X'; // Player is X
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCell, clickedCellIndex) {
    if (gameState[clickedCellIndex] !== '' || !gameActive || currentPlayer === 'O') {
        return; // Prevent action if cell is already occupied or if it's the computer's turn
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    checkResult();

    if (gameActive) {
        currentPlayer = 'O'; // Switch to computer's turn
        computerMove(); // Call computer's move function
    }
}

function computerMove() {
    const availableCells = gameState.map((value, index) => value === '' ? index : null).filter(value => value !== null);
    
    // Simple AI: choose a random available cell
    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const cellIndex = availableCells[randomIndex];
        gameState[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        checkResult();
        currentPlayer = 'X'; // Switch back to player's turn
    }
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
            continue;
        }
        if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `${currentPlayer} has won!`;
        gameActive = false;
        return;
    }

    if (!gameState.includes('')) {
        statusDisplay.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
}

function handleCellClickEvent(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    handleCellClick(clickedCell, clickedCellIndex);
}

function resetGame() {
    gameActive = true;
    currentPlayer = 'X'; // Reset to player start
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClickEvent);
});

resetButton.addEventListener('click', resetGame);

statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
