// Detect ads using common class/ID patterns
const adSelectors = [
    'div[class*="ad"]',
    'div[id*="ad"]',
    'iframe[src*="ads"]',
    'div[class*="banner"]'
  ];
  
  // Replace ads with widgets
  function replaceAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => {
        // Use Shadow DOM to isolate widget styles
        const shadow = ad.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
          <style>
            .adfriend-widget {
              padding: 10px;
              background: white;
              border: 2px solid #4CAF50;
              border-radius: 8px;
            }
          </style>
          <div class="adfriend-widget">
            ${Math.random() > 0.5 ? getQuoteWidget() : getReminderWidget()}
          </div>
        `;
      });
    });
  }
  
  // Handle dynamically loaded ads
  const observer = new MutationObserver(replaceAds);
  observer.observe(document.body, { subtree: true, childList: true });
  
  // Initial replacement
  replaceAds();