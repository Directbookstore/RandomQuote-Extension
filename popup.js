document.addEventListener('DOMContentLoaded', function () {
  const quoteElement = document.getElementById('quote');
  const generateButton = document.getElementById('generateButton');

  generateButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      chrome.tabs.sendMessage(tab.id, { action: 'generateQuote' }, function (response) {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          quoteElement.textContent = 'Error retrieving quote';
        } else {
          if (response && response.quote) {
            quoteElement.textContent = response.quote;
          } else {
            console.error('Invalid response:', response);
            quoteElement.textContent = 'Invalid response';
          }
        }
      });
    });
  });
});

