# 🐾 UselessWeb - Animal of the Day

A fun and interactive web application that displays a random animal image every time the user clicks the **"Find me a New Animal"** button. The app also plays a random animal laughing sound when a new image is loaded.

## 🚀 Features
- 🖼️ Displays a random fun animal image on page load.
- 🔄 Fetches a new random animal image when the button is clicked.
- 🎵 Plays a fun laughing animal sound when the new image is displayed.
- 📱 Fully responsive design with a simple and fun UI.

## 🛠️ Technologies Used
- **HTML5** for the structure
- **CSS3** for styling (using `Honk` font for a fun look)
- **JavaScript (Vanilla)** for functionality
- **Free APIs** for fetching animal images:
  - 🐶 [Some Random API - Dog](https://some-random-api.com/animal/dog)
  - 🐱 [Some Random API - Cat](https://some-random-api.com/animal/cat)
  - 🐼 [Some Random API - Panda](https://some-random-api.com/animal/panda)
  - 🐴 [Some Random API - Donkey](https://some-random-api.com/animal/donkey)
  - 🐷 [Some Random API - Pig](https://some-random-api.com/animal/pig)
- 🎵 Fun animal laugh sounds (stored in the `/sounds` folder)

## 📂 Folder Structure
```
/UselessWeb-Animal
│── index.html        # Main HTML file
│── styles.css        # CSS for styling
│── script.js         # JavaScript for functionality
│── /sounds           # Folder for sound effects
│   ├── 1.mp3
│   ├── 2.mp3
│   ├── 3.mp3
│   ├── ...
```

## 🎮 Usage
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/UselessWeb-Animal.git
   cd UselessWeb-Animal
   ```
2. **Open `index.html` in a browser** (or use Live Server in VS Code).
3. **Click the button** to fetch new animals and hear random sounds!

## 🐞 Troubleshooting
- If images are not loading, check the browser console (`F12 > Console`) for API errors.
- If sounds are not playing, ensure the `.mp3` files exist in the `/sounds` folder.
- Some APIs might have rate limits. Wait a few minutes and try again.

## 📜 License
This project is **open-source** and free to use under the MIT License.

---
✨ Have fun discovering random animals! 🦊🐵🐶
