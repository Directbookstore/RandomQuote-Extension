chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'generateQuote') {
    const quotes = [
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Do not wait for leaders; do it alone, person to person.",
      "The best way to predict the future is to create it.",
      // Add more quotes as needed
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    sendResponse({ quote: randomQuote });
  }
});
