// script.js
document.addEventListener("DOMContentLoaded", function () {
  // ================================
  // GET REFERENCES TO HTML ELEMENTS
  // ================================
  const chatbotContainer = document.getElementById("chatbot-container"); // The chatbot box
  const chatbotIcon = document.getElementById("chatbot-icon");           // Floating chat icon
  const closeButton = document.getElementById("close-btn");              // "X" button to close chatbot
  const sendBtn = document.getElementById("send-btn");                   // Send button
  const chatbotInput = document.getElementById("chatbot-input");         // Text input for user messages
  const chatbotMessages = document.getElementById("chatbot-messages");   // Message display area

  // ================================
  // TOGGLE CHATBOT VISIBILITY
  // ================================
  
  // When clicking the floating chat icon
  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden"); // Show chatbot window
    chatbotIcon.style.display = "none"; // Hide floating icon
  });

  // When clicking the close button in chatbot header
  closeButton.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden"); // Hide chatbot window
    chatbotIcon.style.display = "flex"; // Show floating icon again
  });

  // ================================
  // SEND MESSAGE EVENTS
  // ================================
  
  // Click on the Send button
  sendBtn.addEventListener("click", sendMessage);

  // Press "Enter" in the input box
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // ================================
  // MAIN SEND MESSAGE FUNCTION
  // ================================
  function sendMessage() {
    const userMessage = chatbotInput.value.trim(); // Get the message text
    if (userMessage) {
      appendMessage("user", userMessage); // Show the user's message in chat
      chatbotInput.value = ""; // Clear the input box
      getBotResponse(userMessage); // Call the bot response function
    }
  }

  // ================================
  // APPEND A MESSAGE TO CHAT AREA
  // sender: "user" or "bot"
  // message: text to display
  // ================================
  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender); // Add classes for styling
    messageElement.textContent = message; // Set the message text
    chatbotMessages.appendChild(messageElement); // Add message to chat area
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto scroll to latest message
  }

  // ================================
  // GET BOT RESPONSE (Gemini API)
  // ================================
  async function getBotResponse(userMessage) {
    // Replace with your Gemini API key
    const apiKey = ""; // <-- ADD YOUR KEY HERE

    // Choose the model version you want to use
    const model = "gemini-1.5-flash";

    // Gemini API endpoint URL
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    // ====================================
    // STEP 1: Show "Bot is typing..." message
    // ====================================
    const typingEl = document.createElement("div");
    typingEl.classList.add("message", "bot");
    typingEl.textContent = "Bot is typing...";
    chatbotMessages.appendChild(typingEl);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    try {
      // ====================================
      // STEP 2: Make API Request to Gemini
      // ====================================
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userMessage }],
            },
          ],
        }),
      });

      const data = await response.json();

      // ====================================
      // STEP 3: Replace "Bot is typing..." with actual reply
      // ====================================
      const botMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                         "Sorry, I couldn't understand that.";
      typingEl.textContent = botMessage; // Update the same element's text
    } catch (error) {
      console.error("Error fetching bot response:", error);
      typingEl.textContent = "Sorry, something went wrong. Please try again.";
    }
  }
});
