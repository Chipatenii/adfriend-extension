document.getElementById('save').addEventListener('click', () => {
    const reminder = document.getElementById('reminder').value;
    chrome.storage.local.set({ reminder }, () => {
      alert('Settings saved!');
    });
  });