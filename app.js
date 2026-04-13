/**
 * Phase 2 UI Scope - 2 Player Game Logic
 * Implements Menu -> Game flow with Easy (4x4) and Hard (6x6) modes.
 */

const PLAYERS = [
    { id: 1, name: 'Player 1', score: 0, theme: 'player1-turn' },
    { id: 2, name: 'Player 2', score: 0, theme: 'player2-turn' }
];


const ICONS_HARD = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🥝', '🍋', '🥥', '🥑', '🍆', '🥕', '🌽', '🍿', '🍩', '🍕', '🍔','Q']; // 18 Pairs

let currentMode = 'easy';
let currentIcons = [];
let cards = [];
let currentPlayerIndex = 0;
let flippedCards = []; // Array of indices
let matchedPairs = 0;
let isBoardLocked = false;
let turnCountdown = 10;
let timerInterval = null;
let hideTimeout = null;

function showMenu() {
    // Cleanup any running game state safely
    clearInterval(timerInterval);
    timerInterval = null;
    
    if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
    }
    
    // Reset any state classes
    document.body.className = '';
    
    // Hide game and overlay, show menu
    document.getElementById('main-menu').classList.remove('d-none');
    document.getElementById('game-wrapper').classList.add('d-none');
    document.getElementById('game-over-overlay').classList.add('hidden');
}

function showGame(mode) {
    currentMode = mode;
    currentIcons =ICONS_HARD .slice(0, mode === 'easy' ? 8 : 18);
   
    
    document.getElementById('main-menu').classList.add('d-none');
    document.getElementById('game-wrapper').classList.remove('d-none');
    
    // Toggle 6x6 grid class
    const gridEl = document.getElementById('card-grid');
    if (mode === 'hard') {
        gridEl.classList.add('grid-6x6');
    } else {
        gridEl.classList.remove('grid-6x6');
    }
    
    initGame();
}

function initGame() {
    currentPlayerIndex = 0;
    matchedPairs = 0;
    PLAYERS.forEach(p => p.score = 0);
    flippedCards = [];
    isBoardLocked = false;
    
    // Create random pairs
    let iconPairs = [...currentIcons, ...currentIcons];
    
    // Unbiased Fisher-Yates shuffle to ensure fair card distribution
    for (let i = iconPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [iconPairs[i], iconPairs[j]] = [iconPairs[j], iconPairs[i]];
    }
    
    cards = iconPairs.map((icon, index) => ({ 
        id: index, 
        icon, 
        isFlipped: false, 
        isMatched: false 
    }));

    renderScoreboard();
    renderBoard();
    updateTurnUI("Game Started! Player 1's turn");
    
    startTimer();
}

function renderScoreboard() {
    const scoreboardEl = document.getElementById('scoreboard');
    scoreboardEl.innerHTML = '';
    
    PLAYERS.forEach((player, index) => {
        const isActive = index === currentPlayerIndex;
        const playerCard = document.createElement('div');
        playerCard.className = `player-card glass-panel ${isActive ? 'active' : ''}`;
        
        const initial = "P" + player.id;
        
        playerCard.innerHTML = `
            <div class="player-info">
                <div class="player-avatar">${initial}</div>
                <div class="player-name">${player.name}</div>
            </div>
            <div class="player-score">${player.score}</div>
        `;
        scoreboardEl.appendChild(playerCard);
    });
}

function renderBoard() {
    const gridEl = document.getElementById('card-grid');
    gridEl.innerHTML = '';
    
    cards.forEach((cardData, index) => {
        const cardBtn = document.createElement('button');
        
        let stateClass = '';
        if (cardData.isMatched) stateClass = 'matched';
        else if (cardData.isFlipped) stateClass = 'revealed';
        
        cardBtn.className = `card ${stateClass}`;
        cardBtn.dataset.index = index;
        cardBtn.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back"></div>
                <div class="card-face card-front">${cardData.icon}</div>
            </div>
        `;
        
        cardBtn.addEventListener('click', () => handleCardClick(index));
        gridEl.appendChild(cardBtn);
    });
}

function updateTurnUI(messageOverride = null) {
    const currentPlayer = PLAYERS[currentPlayerIndex];
    
    // Update body theme (Red for P1, Blue for P2)
    document.body.className = currentPlayer.theme;
    
    // Reset Timer for the new turn
    turnCountdown = 10;
    const timerEl = document.getElementById('timer-display');
    timerEl.textContent = `00:10`;
    
    // Update text
    const statusEl = document.getElementById('status-text');
    statusEl.style.opacity = '0';
    setTimeout(() => {
        statusEl.textContent = messageOverride || `${currentPlayer.name}'s turn`;
        statusEl.style.opacity = '1';
    }, 150);
    
    // Re-render scoreboard to highlight active player
    renderScoreboard();
}

function handleCardClick(index) {
    if (isBoardLocked) return;
    
    const card = cards[index];
    if (card.isFlipped || card.isMatched) return;
    
    // Flip the card
    card.isFlipped = true;
    flippedCards.push(index);
    
    // Update board UI directly
    const cardEl = document.querySelector(`.card[data-index="${index}"]`);
    cardEl.classList.add('revealed');
    
    // Hard Mode limited visibility: 1st card hides after 1 second
    if (flippedCards.length === 1 && currentMode === 'hard') {
        hideTimeout = setTimeout(() => {
            if (flippedCards.length === 1 && flippedCards[0] === index) {
                cards[index].isFlipped = false;
                document.querySelector(`.card[data-index="${index}"]`).classList.remove('revealed');
             // Drop the selection so they have to try again
            }
        }, 1000);
    }
    
    if (flippedCards.length === 2) {
        if (hideTimeout) clearTimeout(hideTimeout);
        checkMatch();
    }
}

function checkMatch() {
    isBoardLocked = true;
    const [idx1, idx2] = flippedCards;
    const card1 = cards[idx1];
    const card2 = cards[idx2];
    
    if (card1.icon === card2.icon) {
        // MATCH!
        card1.isMatched = true;
        card2.isMatched = true;
        
        PLAYERS[currentPlayerIndex].score += 1;
        matchedPairs++;
        
        // Brief message without triggering a full turn switch yet
        const statusEl = document.getElementById('status-text');
        statusEl.textContent = "Match found! Go again.";
        
        // Visual updates
        setTimeout(() => {
            const el1 = document.querySelector(`.card[data-index="${idx1}"]`);
            const el2 = document.querySelector(`.card[data-index="${idx2}"]`);
            el1.classList.remove('revealed');
            el1.classList.add('matched');
            el2.classList.remove('revealed');
            el2.classList.add('matched');
            
            renderScoreboard(); 
            
            if (matchedPairs === currentIcons.length) {
                endGame();
            } else {
                flippedCards = [];
                isBoardLocked = false;
                
                // Allow player to go again -> reset 10s timer and text
                setTimeout(() => {
                     if(matchedPairs !== currentIcons.length) updateTurnUI();
                }, 1000);
            }
        }, 600); 
        
    } else {
        // NO MATCH
        const statusEl = document.getElementById('status-text');
        statusEl.textContent = "No match!";
        
        setTimeout(() => {
            card1.isFlipped = false;
            card2.isFlipped = false;
            
            const el1 = document.querySelector(`.card[data-index="${idx1}"]`);
            const el2 = document.querySelector(`.card[data-index="${idx2}"]`);
            el1.classList.remove('revealed');
            el2.classList.remove('revealed');
            
            // Switch turns
            currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
            updateTurnUI();
            
            flippedCards = [];
            isBoardLocked = false;
        }, 1500);
    }
}

function handleTimeOut() {
    isBoardLocked = true;
    
    const statusEl = document.getElementById('status-text');
    statusEl.textContent = "Time's up!";
    
    // If they had flipped 1 card, flip it back down
    if (flippedCards.length === 1) {
        const idx = flippedCards[0];
        cards[idx].isFlipped = false;
        const cardEl = document.querySelector(`.card[data-index="${idx}"]`);
        cardEl.classList.remove('revealed');
    }
    
    // Pass turn to the other player
    setTimeout(() => {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        flippedCards = [];
        updateTurnUI();
        isBoardLocked = false;
    }, 1500);
}

function endGame() {
    const p1Score = PLAYERS[0].score;
    const p2Score = PLAYERS[1].score;
    let text = "";
    
    if (p1Score > p2Score) text = "🏆 Player 1 Wins!";
    else if (p2Score > p1Score) text = "🏆 Player 2 Wins!";
    else text = "🤝 It's a Tie!";
    
    const statusEl = document.getElementById('status-text');
    statusEl.style.opacity = '0';
    setTimeout(() => {
       statusEl.textContent = `Game Over!`;
       statusEl.style.opacity = '1';
    }, 150);
    
    clearInterval(timerInterval);
    
    // Show overlay and fire confetti
    setTimeout(() => {
        const overlay = document.getElementById('game-over-overlay');
        const winnerText = document.getElementById('winner-text');
        winnerText.textContent = text;
        overlay.classList.remove('hidden');
        
        // Fire confetti
        if (typeof confetti === 'function') {
            const duration = 3000;
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0.8 },
                    colors: ['#3b82f6', '#ef4444', '#10b981', '#f0abfc']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0.8 },
                    colors: ['#3b82f6', '#ef4444', '#10b981', '#f0abfc']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    }, 800);
}

function startTimer() {
    const timerEl = document.getElementById('timer-display');
    timerInterval = setInterval(() => {
        // Pause counting down when cards are being compared
        if (isBoardLocked) return; 
        
        turnCountdown--;
        if (turnCountdown < 0) turnCountdown = 0;
        
        const secs = String(turnCountdown).padStart(2, '0');
        timerEl.textContent = `00:${secs}`;
        
        // Timeout trigger
        if (turnCountdown === 0) {
            handleTimeOut();
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Start on menu
    showMenu();
    
    // Listeners for Menu
    document.getElementById('btn-easy').addEventListener('click', () => {
        showGame('easy');
    });
    
    document.getElementById('btn-hard').addEventListener('click', () => {
        showGame('hard');
    });
    
    // Restart button -> Go strictly back to Menu
    document.getElementById('restart-btn').addEventListener('click', () => {
        showMenu();
    });
    
    // Exit active game to Menu
    document.getElementById('exit-game-btn').addEventListener('click', () => {
        showMenu();
    });
});
