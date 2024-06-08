const envelope = document.getElementById('envelope');
const envelopeFront = document.getElementById('envelope-front');
const letter = document.getElementById('letter');
const song = document.getElementById('song');
const passwordInput = document.getElementById('password-input');

const password = '11062024'; // Change this to your desired password

passwordInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    console.log('Password entered:', passwordInput.value);

    if (passwordInput.value === password) {
      console.log('Correct password');
      envelopeFront.classList.add('open');
      letter.classList.add('open');
      song.play();
    } else {
      console.log('Incorrect password');
      alert('Incorrect password!');
    }
    passwordInput.value = '';
  }
});

song.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);