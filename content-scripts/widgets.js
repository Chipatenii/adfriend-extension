// Motivational Quotes (API fetch)
function getQuoteWidget() {
    return `
      <div class="quote">
        <h3>Daily Motivation</h3>
        <p>"${fetchQuote()}"</p>
        <button onclick="location.reload()">New Quote</button>
      </div>
    `;
  }
  
  // Activity Reminder (User-customized)
  function getReminderWidget() {
    chrome.storage.local.get(['reminder'], (result) => {
      return `
        <div class="reminder">
          <h3>Reminder! ⏰</h3>
          <p>${result.reminder || "Stay hydrated!"}</p>
        </div>
      `;
    });
  }
  
  // Fetch quotes from API
  async function fetchQuote() {
    const response = await fetch('https://type.fit/api/quotes');
    const quotes = await response.json();
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    return random.text + " —" + (random.author || "Anonymous");
  }