# 💬 Chatbot (HTML + CSS + JavaScript)

A simple, beginner-friendly chatbot UI with **floating chat icon**, **stylish design**, and integration with the **Google Gemini API** (can also be adapted for OpenAI API).

This project uses:
- **External CSS** (`styles.css`) for styling
- **External JavaScript** (`script.js`) for chatbot logic
- **Google Gemini API** for AI-powered responses

---

## 📌 Features

- **Floating Chat Icon**  
  A small chat icon at the bottom right corner that opens the chatbot when clicked.

- **Modern & Responsive UI**  
  Dark theme with a clean, minimal look, styled with `styles.css`.

- **Animated Hover Effects**  
  Chat icon slightly enlarges and changes color when hovered.

- **Show/Hide Chatbot**  
  Open chatbot by clicking the icon, close with an **X** button.

- **User & Bot Message Bubbles**  
  Different styles for **user** and **bot** messages.

- **Scroll to Latest Message**  
  Automatically scrolls to the latest message after each response.

- **Enter Key Support**  
  Press **Enter** to send a message instead of clicking the Send button.

- **API Integration**  
  Connects with **Gemini API** to generate AI chatbot responses.
---

## 🗂 Project Structure

📂 chatbot-project
├── index.html # Main HTML file (UI structure)
├── styles.css # External CSS file (styling)
├── script.js # External JS file (chatbot logic + API calls)




---

## 📜 How It Works

### 1. **HTML (`index.html`)**
- Defines the **floating chat icon**.
- Contains the **chatbot window** with:
  - **Header** (title + close button)
  - **Message area** (`#chatbot-messages`)
  - **Input field** & **Send button**
- Links to:
  - `styles.css` for styling
  - `script.js` for JavaScript functionality

---

### 2. **CSS (`styles.css`)**
- **Dark theme design** with a red accent color.
- **Floating button styles** for the chat icon.
- **Message bubble styles** for user and bot messages.
- **Responsive and modern** layout.
- Hover animations for interactive feel.

---

### 3. **JavaScript (`script.js`)**
- Runs when the page is loaded (`DOMContentLoaded` event).
- **Main Functions:**
  - **Toggle Chatbot Visibility**  
    - Show chatbot when the floating icon is clicked.  
    - Hide chatbot when the close button is clicked.
  - **Send Message**  
    - When the Send button is clicked or Enter is pressed:
      - Append the **user message** to the chat.
      - Call the **Gemini API** with the message.
      - Append the **bot's reply** to the chat.
  - **Auto-scroll** to the newest message.

---

## 🔑 API Setup

1. Get a **Gemini API Key** from:
   - [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

2. In `script.js`, replace:
   ```javascript
   const apiKey = "";
const apiKey = "YOUR_API_KEY";


## How to Run
- Download the project files.
- Open index.html in your browser.
- Click the floating 💬 icon to open the chatbot.
- Type a message and either click Send or press Enter.

Wait for the bot's reply.



## Notes for Beginners
- External CSS & JS: The HTML file doesn’t contain inline styling or scripts — all design is in styles.css and all logic in script.js.
- API Security: Never expose API keys in public projects. This project is for learning only — use a backend for production.
Customization:
- Change colors in styles.css.
- Switch to another AI model by changing the API URL and parameters in script.js.

