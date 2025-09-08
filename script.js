const greetBtn = document.getElementById('greetBtn');
const greeting = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');
const bgBtn = document.getElementById('bgBtn');
const numberList = document.getElementById('numberList');
const toggleGreetingBtn = document.getElementById('toggleGreetingBtn');

// Greet user
greetBtn.onclick = function() {
  const name = nameInput.value.trim();
  if (name) {
    greeting.innerText = 'Hello, ' + name + '!';
  } else {
    greeting.innerText = 'Please enter your name.';
  }
};

// Change background color randomly
bgBtn.onclick = function() {
  const colors = ['#530ddee4', '#110ddee4', '#592404f4', '#dc15aae5'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
};

// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.innerText = i;
  numberList.appendChild(li);
}

// Hide/show greeting
toggleGreetingBtn.onclick = function() {
  if (greeting.style.display === 'none') {
    greeting.style.display = 'block';
  } else {
    greeting.style.display = 'none';
  }
};
