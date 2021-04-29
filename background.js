const lofi = document.createElement('audio');
const med = document.createElement('audio');
lofi.src = '/assets/lofi.mp3';
med.src = '/assets/meditation.mp3';

let playingLofi = false;
document.getElementById("lofiButton").addEventListener('click', playLofi = () => {
  console.log('now playing lofi');
  if (playingMed) {
    med.pause();
    playingMed = false;
  }
  if (playingLofi) {
    lofi.pause();
    playingLofi = false;
  } else if (!playingLofi) {
    lofi.play();
    playingLofi = true;
  }
})
let playingMed = false;
document.getElementById("medButton").addEventListener('click', playMed = () => {
  console.log('now playing meditation');
  if (playingLofi) {
    lofi.pause();
    playingLofi = false;
  }
  if (playingMed) {
    med.pause();
    playingMed = false;
  } else if (!playingLofi) {
    med.play();
    playingMed = true;
  }
})



const blacklistArr = [
  'https://www.youtube.com/',
  'https://www.facebook.com/',
  'https://www.reddit.com/',
];

// let storageArr;
// chrome.storage.local.set({ blacklist: blacklistArr }, () => {
//   console.log('Stored blacklist');
// });
// chrome.storage.local.get(['blacklist'], (res) => {
//   console.log('Blacklist: ' + res.blacklist);
//   storageArr = res.blacklist;
// });

// const blacklist = document.getElementById('blacklist');
// const list = document.createElement('ul');
// document.addEventListener('DOMContentLoaded', () => {
//   blacklistArr.forEach((url) => {
//     list.innerText = `<li>${url}</li>`;
//   });
//   blacklist.appendChild(list);
// });
const list = document.createElement('ul');
list.setAttribute('id','myList')
let activated = false;

document.getElementById('onButton').addEventListener('click', () => {
  if (!activated) {
    activated = true;
    // const list = document.createElement('ul');
    const blacklist = document.getElementById('blacklist');
    console.log(blacklistArr);
    blacklistArr.forEach((url) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = url;
      list.appendChild(listItem);
    });
    document.getElementById('blacklist').appendChild(list);
  } else {
    activated = false;
    document.getElementById('myList').remove();
    console.log('remove');
  }
})

document.getElementById('submit').addEventListener('click',() => {
  if (document.getElementById('input').value !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = document.getElementById('input').value;
    blacklistArr.push(document.getElementById('input').value);
    list.appendChild(listItem);
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    if (activated) {
      console.log('enter');
      document.getElementById('submit').click();
      document.getElementById('input').value = '';
      console.log(blacklistArr);
    }
  }
});