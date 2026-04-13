# 🧠 Memory Game

> A pristine, dynamic memory matching game built with modern web technologies. Challenge your memory skills in an elegant two-player experience with stunning UI and smooth animations.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Vyshnav--cp-181717?logo=github)](https://github.com/Vyshnav-cp)
[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://html5.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://www.javascript.com/)

---

## 📸 Overview

Memory Game is a modern, interactive two-player memory matching game that tests your ability to find matching pairs of cards. Built with vanilla JavaScript, CSS3, and HTML5, it features a sleek glassmorphism design, responsive gameplay, and engaging animations.

**Perfect for:** Students, puzzle enthusiasts, game developers learning UI/UX design, and anyone looking for a quick brain workout! 🎮

---

## ✨ Key Features

### 🎮 Gameplay Features
- **Two Difficulty Modes**
  - 🟢 **Easy Mode (4×4)**: 8 card pairs - Great for beginners and warm-ups
  - 🔴 **Hard Mode (6×6)**: 18 card pairs - Challenge for experienced players

- **Two-Player Support**
  - Turn-based gameplay system
  - Real-time score tracking
  - Dynamic active player indication
  - Scoreboard with live updates

- **Game Mechanics**
  - Smart card matching algorithm
  - Automatic card hiding on mismatch
  - Turn management (10-second per turn)
  - Match validation and scoring

### 🎨 Design & UX
- **Glassmorphism UI**
  - Modern frosted glass effect with transparency
  - Elegant dark theme with blue accents
  - Smooth color transitions

- **Animations & Feedback**
  - Smooth card flip animations (0.6s)
  - Hover effects on interactive elements
  - Confetti celebration on victory
  - State-based visual feedback

- **Responsive Design**
  - Fully responsive on all screen sizes
  - Works perfectly on desktop, tablet, and mobile
  - Portrait and landscape orientation support
  - Touch-friendly interface

### ⏱️ Additional Features
- Real-time game timer
- Exit to menu functionality
- Play again without page reload
- Accessible UI with semantic HTML
- Clean, modular code architecture

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local HTTP server (Python 3 or Node.js)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vyshnav-cp/MEMORYGAME.git
   cd MEMORYGAME
   ```

2. **Start a local server**
   
   **Using Python 3** (recommended):
   ```bash
   python3 -m http.server 8000
   ```
   
   **Using Python 2**:
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js**:
   ```bash
   npx http-server -p 8000
   ```
   
   **Using PHP**:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

4. **Select difficulty and play!**

---

## 🎯 How to Play

### Game Flow
```
Start → Select Difficulty → Play Game → Match Pairs → Win & Celebrate!
```

### Step-by-Step Guide

1. **Launch the Game**
   - Open `http://localhost:8000` in your browser
   - You'll see the main menu with the Happy Brain mascot

2. **Choose Difficulty**
   - Click **"Easy (4×4)"** for a beginner experience
   - Click **"Hard (6×6)"** for a challenging game
   - Game initializes with shuffled cards

3. **Gameplay**
   - **Player 1 starts first**
   - Click any card to flip and reveal the emoji
   - Click another card to find its match
   - **If cards match:** They stay flipped, you score a point, and your turn continues
   - **If cards don't match:** They flip back, turn passes to the next player
   - Each turn has a 10-second limit
   - Alternate turns until all pairs are found

4. **Win the Game**
   - First player to match the most pairs wins
   - Confetti animation celebrates your victory
   - Click **"Play Again"** to start a new game
   - Click **"Exit to Menu"** to return and choose a new difficulty

### Game Rules
- 🃏 Each card has exactly one matching pair
- 🔄 Cards are randomly shuffled every game
- ⏰ Turns are time-limited for added challenge
- 🎯 Higher match count = higher score
- 🏆 Most matches at end = Winner!

---

## 📂 Project Structure

```
MEMORYGAME/
├── 📄 index.html                              # Main HTML file (~70 lines)
│   ├── Menu container with game title
│   ├── Game wrapper with dashboard & board
│   ├── Scoreboard for player tracking
│   └── Game over overlay with winner info
│
├── 🎨 styles.css                              # Styling & animations (~538 lines)
│   ├── CSS variables for theming
│   ├── Glassmorphism effects
│   ├── Card flip animations
│   ├── Responsive grid layouts
│   └── Button & state styles
│
├── 💻 app.js                                  # Game logic (~379 lines)
│   ├── Player & game state management
│   ├── Card shuffling & matching
│   ├── Turn & timer management
│   ├── DOM rendering & updates
│   └── Event handling
│
├── 🖼️ happy-brain-cartoon-*.webp             # Menu mascot image
├── 📖 README.md                               # This file
└── 📋 .gitignore                              # Git configuration
```

---

## 🛠️ Technologies & Tools

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup, accessibility, form elements |
| **CSS3** | Modern styling, animations, responsive design, Grid & Flexbox |
| **JavaScript (ES6+)** | Game logic, state management, DOM manipulation |
| **Canvas Confetti** | Celebration animations on victory |
| **Google Fonts (Inter)** | Typography - clean, modern sans-serif font |

### Key Libraries
- **Canvas Confetti** (`v1.6.0`) - For victory celebrations via CDN

---

## 🎨 Design System

### Color Palette
```css
--bg-dark: #0f172a              /* Deep dark background */
--text-main: #f8fafc            /* Primary text color */
--text-muted: #94a3b8           /* Secondary text color */
--accent-blue: #3b82f6          /* Active state highlight */
--accent-purple: #8b5cf6        /* Secondary accent */
--card-hidden: #1e293b          /* Hidden card background */
--card-matched-bg: #10b981      /* Matched card color */
```

### Typography
- **Font Family:** Inter (Google Fonts)
- **Font Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Sizes:** Responsive scaling from mobile to desktop

### Component Styles
- **Glass Panels:** Frosted effect with backdrop blur and transparency
- **Buttons:** Primary (blue), Secondary (gray), Hard mode (red highlight)
- **Cards:** Hidden state vs. revealed state with smooth transitions
- **Grid:** 4×4 (easy) and 6×6 (hard) responsive layouts

---

## 💡 Customization Guide

### 1. Change Card Icons
Edit `app.js` line 14:
```javascript
const ICONS_HARD = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🥝', '🍋', ...];
```

Replace emojis with your preferred icons:
```javascript
const ICONS_HARD = ['🎵', '🎸', '🎹', '🎺', '🎻', '🥁', '🎤', '🎧', ...];
```

### 2. Modify Player Names
Edit `app.js` line 6-8:
```javascript
const PLAYERS = [
    { id: 1, name: 'Alice', score: 0, theme: 'player1-turn' },
    { id: 2, name: 'Bob', score: 0, theme: 'player2-turn' }
];
```

### 3. Adjust Turn Time
Edit `app.js` line 24:
```javascript
let turnCountdown = 10;  // Change from 10 to desired seconds
```

### 4. Customize Colors
Edit `styles.css` lines 1-18 (CSS variables):
```css
:root {
    --bg-dark: #0f172a;
    --accent-blue: #3b82f6;
    /* Modify as needed */
}
```

### 5. Add New Game Mode
Add to `app.js`:
```javascript
function startMediumMode() {
    const mode = 'medium';
    const gridSize = 5; // 5x5 grid
    currentIcons = ICONS_HARD.slice(0, 12); // 12 pairs
    // ... initialize game
}
```

---

## 📊 Game Statistics

| Metric | Easy Mode | Hard Mode |
|--------|-----------|-----------|
| Grid Size | 4×4 | 6×6 |
| Total Cards | 16 | 36 |
| Card Pairs | 8 | 18 |
| Time/Turn | 10 seconds | 10 seconds |
| Difficulty | ⭐ | ⭐⭐⭐⭐⭐ |

---

## 🔧 Code Architecture

### Key Functions

```javascript
// Initialization
initGame()              // Set up new game
renderBoard()           // Render cards to DOM
renderScoreboard()      // Update player scores

// Game Logic
flipCard(cardId)        // Handle card flip
checkMatch()            // Validate if cards match
switchPlayer()          // Alternate turns
endGame()               // Handle game completion

// UI Management
showMenu()              // Display main menu
showGame(mode)          // Display game interface
updateTurnUI()          // Update status text
startTimer()            // Begin countdown timer
```

### Game State Variables
- `cards[]` - Array of card objects with id, icon, flip state
- `flippedCards[]` - Indices of currently flipped cards
- `currentPlayerIndex` - Active player (0 or 1)
- `matchedPairs` - Count of successfully matched pairs
- `isBoardLocked` - Prevents interaction during animations

---

## 🚀 Performance Optimizations

✅ **Minimal Dependencies** - Only Canvas Confetti via CDN  
✅ **Efficient DOM Queries** - Cached selectors where possible  
✅ **CSS Animations** - Hardware-accelerated transforms  
✅ **Event Delegation** - Single listener for card interactions  
✅ **Responsive Images** - WebP format for faster loading  

---

## ♿ Accessibility Features

- ✅ Semantic HTML structure (`<main>`, `<aside>`, `<article>`)
- ✅ ARIA labels for screen readers (`role="button"`, `aria-label`)
- ✅ Keyboard navigation support
- ✅ High contrast color scheme (WCAG AA compliant)
- ✅ Visible focus indicators on interactive elements
- ✅ Proper heading hierarchy

---

## 🐛 Known Issues & Limitations

### Current Limitations
- 🎭 No sound effects (can be added)
- 🤖 No single-player vs AI mode (planned feature)
- 📱 Mobile: tap feedback could be improved

### Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Future Enhancements

### Planned Features
- [ ] 🔊 Sound effects for flips, matches, and victory
- [ ] 🤖 Single-player mode vs AI opponent
- [ ] 🏆 Leaderboard with high scores
- [ ] 💾 Local storage for game saves
- [ ] 🎨 Theme customization (Light/Dark/Custom)
- [ ] ⏱️ Time attack mode
- [ ] 🌐 Multiplayer online gameplay (WebSocket)
- [ ] 📊 Game statistics and analytics
- [ ] 🎮 Power-ups and special abilities
- [ ] 🌍 Multi-language support

---

## 📝 Code Quality Standards

✅ **Code Organization**
- Modular function structure
- Clear variable naming conventions
- Commented sections for major features

✅ **Performance**
- Efficient algorithms (Fisher-Yates shuffle)
- Minimal re-renders
- CSS animations over JavaScript

✅ **Maintainability**
- DRY (Don't Repeat Yourself) principles
- Reusable utility functions
- Consistent formatting

---

## 🤝 Contributing

Contributions are welcome! Help make Memory Game even better.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/MEMORYGAME.git
   cd MEMORYGAME
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Add new features or fix bugs
   - Update README if necessary
   - Test thoroughly

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: amazing new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Wait for review and feedback

### Areas Needing Help
- 🔊 Sound design and effects
- 🎨 UI/UX improvements
- 🧪 Testing and bug fixes
- 📚 Documentation enhancements
- 🌍 Translation support
- ♿ Accessibility improvements

---

## 📄 License

This project is open source and available under the **MIT License**. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Vyshnav CP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author & Contact

**Vyshnav CP**

- 🐙 GitHub: [@Vyshnav-cp](https://github.com/Vyshnav-cp)
- 📧 Email: vyshnav.cp@example.com
- 💼 Repository: [MEMORYGAME](https://github.com/Vyshnav-cp/MEMORYGAME)

---

## 🙏 Acknowledgments

Special thanks to:
- **Google Fonts** for the beautiful Inter typeface
- **Canvas Confetti** library for celebration animations
- **Inspired by** classic memory matching games and modern UI design principles
- **Community** members who test and provide feedback

---

## 📞 Support & Troubleshooting

### Common Issues

**"Game won't load"**
- ✅ Ensure JavaScript is enabled in your browser
- ✅ Try a different browser (Chrome, Firefox)
- ✅ Clear browser cache and cookies

**"Cards not flipping"**
- ✅ Check console for JavaScript errors (F12)
- ✅ Ensure all files are in the same directory
- ✅ Verify HTTP server is running correctly

**"Server not starting"**
- ✅ Check if port 8000 is available
- ✅ Try a different port: `python3 -m http.server 8080`
- ✅ Ensure Python 3 is installed: `python3 --version`

### Getting Help
1. Check existing GitHub [Issues](https://github.com/Vyshnav-cp/MEMORYGAME/issues)
2. Search Stack Overflow with specific error messages
3. Open a new issue with detailed description
4. Include browser version and steps to reproduce

---

## 📈 Project Statistics

```
Lines of Code: ~1,000+
  ├── JavaScript: 379 lines
  ├── CSS: 538 lines
  └── HTML: ~70 lines

Features: 10+
Difficulty Modes: 2
Card Pairs: 26 (8 + 18)
Animations: 15+
Supported Browsers: 4+
```

---

## ⭐ Star this Repository!

If you enjoy Memory Game, please consider giving it a ⭐ on GitHub!

[![Star](https://img.shields.io/github/stars/Vyshnav-cp/MEMORYGAME?style=social)](https://github.com/Vyshnav-cp/MEMORYGAME)
[![Follow](https://img.shields.io/github/followers/Vyshnav-cp?style=social)](https://github.com/Vyshnav-cp)

---

## 🎮 Ready to Play?

**[Play Now →](http://localhost:8000)** | **[View Code →](https://github.com/Vyshnav-cp/MEMORYGAME)** | **[Report Bug →](https://github.com/Vyshnav-cp/MEMORYGAME/issues)**

---

<div align="center">

**Enjoy the game and happy matching! 🧠✨**

*Built with ❤️ by Vyshnav CP*

</div>
