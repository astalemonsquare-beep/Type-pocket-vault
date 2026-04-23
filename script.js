// --- 1. API Logic ---
const fetchBtn = document.getElementById('fetch-btn');
const apiText = document.getElementById('api-text');

fetchBtn.addEventListener('click', () => {
  apiText.innerText = "Searching for a task...";
  
  // Using a public API to get a random activity
  fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
      apiText.innerText = data.activity;
    })
    .catch(error => {
      apiText.innerText = "Oops! Could not reach the server.";
      console.error('Error:', error);
    });
});

// --- 2. Data Persistence (Local Storage) ---
const saveBtn = document.getElementById('save-btn');
const noteInput = document.getElementById('note-input');
const statusMsg = document.getElementById('status-msg');

// When the page loads, check if there is a saved note
window.addEventListener('DOMContentLoaded', () => {
  const savedNote = localStorage.getItem('pocketVaultNote');
  if (savedNote) {
    noteInput.value = savedNote;
  }
});

// Save the note when the button is clicked
saveBtn.addEventListener('click', () => {
  const userText = noteInput.value;
  
  // This saves the data to the browser
  localStorage.setItem('pocketVaultNote', userText);
  
  statusMsg.innerText = "Note saved to Local Storage! 🔒";
  
  // Clear the message after 3 seconds
  setTimeout(() => {
    statusMsg.innerText = "";
  }, 3000);
});

