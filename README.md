# Memory Game - Simple Overview

## What is it?
A fun, interactive **two-player memory matching game** where players take turns flipping cards to find matching pairs.

## How to Play?
1. Choose difficulty: **Easy (4×4)** or **Hard (6×6)**
2. Players alternate flipping cards
3. Match pairs = score points
4. Most matches wins!

## How to Run?
```bash
# Navigate to project folder
cd MEMORYGAME

# Start server
python3 -m http.server 8000

# Open browser
http://localhost:8000
```

## Game Features
- 🎮 Two difficulty modes (8 or 18 pairs)
- 👥 Two-player turn-based gameplay
- 🎨 Beautiful glassmorphism UI
- ⏱️ Real-time game timer
- 🎉 Victory confetti animation
- 📱 Fully responsive design

## Files Included
| File | Purpose |
|------|---------|
| `index.html` | Game structure & layout |
| `app.js` | Game logic & mechanics |
| `styles.css` | Modern styling & animations |
| `README.md` | This documentation |
| Image file | Menu mascot |

## Game Rules
- Each card has one matching pair
- Click cards to flip and find matches
- If match: Cards stay flipped, continue your turn
- If no match: Cards flip back, turn switches to other player
- 10 seconds per turn
- First to match most pairs wins!

## Technologies
- **HTML5** - Structure
- **CSS3** - Design & animations
- **JavaScript** - Game logic
- **Canvas Confetti** - Victory effects

## Customization
Want to modify the game? Edit:
- **Card icons** → `app.js` line 14
- **Player names** → `app.js` line 6-8
- **Colors** → `styles.css` lines 1-18
- **Turn time** → `app.js` line 24

## Quick Stats
- **Easy Mode**: 4×4 grid (16 cards, 8 pairs)
- **Hard Mode**: 6×6 grid (36 cards, 18 pairs)
- **Lines of Code**: ~1,000+
- **Setup Time**: <2 minutes

## Browser Support
✅ Chrome/Edge  
✅ Firefox  
✅ Safari  
✅ Mobile browsers

---

**Ready to play?** Start the server and open `http://localhost:8000`! 🎮
