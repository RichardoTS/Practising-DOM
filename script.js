'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number! 🎊';

console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);

document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
