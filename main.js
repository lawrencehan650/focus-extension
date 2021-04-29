const blacklist = [
  'https://www.youtube.com/',
  'https://www.facebook.com/',
  'https://www.reddit.com/',
  'https://twitter.com/',
];

chrome.storage.local.set({ blacklist: blacklist }, () => {
  console.log('Stored blacklist');
});

blacklist.forEach((url) => {
  if (location.href.startsWith(url)) {
    location.href = 'https://www.google.com';
  }
});
