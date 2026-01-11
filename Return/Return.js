const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");// function is invoked on the myText string
console.log(newString);

const str = "Twas the night before Xmas...";
const newStr = str.replace(/xmas/i, "Christmas");
console.log(newStr); // Twas the night before Christmas...

// function without a return value
function sayHello() {
  console.log("Hello!");
}
const result = sayHello();   // call the function hello is a side effect
console.log(result);         // prints "undefined"

//Implementing function return value
const input = document.querySelector('.numberInput');
const numberPara = document.getElementById("numberOutput");

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    numberPara.textContent = "You need to enter a number!";
  } else {
    numberPara.textContent = `${num} squared is ${squared(num)}. `;
    numberPara.textContent += `${num} cubed is ${cubed(num)}. `;
    numberPara.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});

// Test-1
const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const task1Para = document.getElementById("task1Output");

// Helper function to get random number between min and max
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Function to pick a random item from any array
function chooseItem(array) {
  return array[randomBetween(0, array.length)];
}

// Display a random name initially
task1Para.textContent = chooseItem(names);
//Task-4
// Optional: get short names
function isShort(name) {
  return name.length < 5;
}
const shortNames = names.filter(isShort);
// You can display them if you want:
// task1Para.textContent += " Short names: " + shortNames.join(", ");

// Task-3
function randomBetween(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseItem(array) {
  const choice = array[randomBetween(0, array.length)];
  return choice;
}

task1Para.textContent = chooseItem(names);


//Test-1.1
// Test-1.1: Random name on button click
// ------------------------
const myNames = ["Brian", "Alice", "Sarah", "Tom", "Muna"];
const randomNamePara = document.getElementById("randomNameOutput");
const randomNameBtn = document.querySelector(".test1");

function showRandomName() {
  randomNamePara.textContent = chooseItem(myNames);
}

randomNameBtn.addEventListener("click", showRandomName);

//Test-2
// ------------------------
// Test-2: Draw rectangle on canvas
// ------------------------
const rectCanvas = document.querySelector("canvas"); // first canvas
const rectCtx = rectCanvas.getContext("2d");

function drawSquare(x, y, width, height, color) {
  rectCtx.fillStyle = "white";
  rectCtx.fillRect(0, 0, rectCanvas.width, rectCanvas.height);
  rectCtx.fillStyle = color;
  rectCtx.fillRect(x, y, width, height);
}

// Draw rectangle initially
drawSquare(50, 60, 100, 75, "blue");

// ------------------------

// Test 2.1
// Test-2.1: Draw random circles on second canvas
// ------------------------
const circlesCanvas = document.querySelector(".circles");
const circlesCtx = circlesCanvas.getContext("2d");
const drawCirclesBtn = document.querySelector(".btn-circles");

// Make canvas full viewport
circlesCanvas.width = document.documentElement.clientWidth;
circlesCanvas.height = document.documentElement.clientHeight;

// Helper random function
function randomUpTo(max) {
  return Math.floor(Math.random() * max);
}

function drawRandomCircles() {
  const WIDTH = circlesCanvas.width;
  const HEIGHT = circlesCanvas.height;

  circlesCtx.clearRect(0, 0, WIDTH, HEIGHT);

  for (let i = 0; i < 100; i++) {
    circlesCtx.beginPath();
    circlesCtx.fillStyle = 'rgba(255,0,0,0.5)';
    circlesCtx.arc(randomUpTo(WIDTH), randomUpTo(HEIGHT), randomUpTo(50), 0, 2 * Math.PI);
    circlesCtx.fill();
  }
}

drawCirclesBtn.addEventListener("click", drawRandomCircles);



