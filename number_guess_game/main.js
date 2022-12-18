// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누른다.
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호 < 유저번호 down!
// 랜덤번호 > 유저번호 up!
// Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다. (더 이상 추측 불가, 버튼이 disable)
// 유저가 1,100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computer_n = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user_input");
let resultArea = document.getElementById("Result_a");
let resetButton = document.getElementById("reset-button");
var chances = 5;
let gameOver = false;
let Chance_a = document.getElementById("Chance_a");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){userInput.value=''}); //Lamda function

function pickRandomNum() {
  computer_n = Math.floor(Math.random() * 100) + 1;
  // 랜덤한 숫자를 뽑아줄 수 있게 도와주는 함수
  // Math.floor() 숫자의 소숫점을 버린다.
  console.log("정답", computer_n);
}

function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이 숫자를 입력하세요.";
    return;
    // 함수를 끝낸다.
  }
  if (history.includes(userValue)) {
    resultArea.textContent = "Already exist";
    return;
  }
  chances--;
  Chance_a.textContent = `Remains : ${chances}번`;
  if (userValue < computer_n) {
    resultArea.textContent = "Up!!!";
  } else if (userValue > computer_n) {
    resultArea.textContent = "Down!!!";
  } else {
    resultArea.textContent = "Correct!!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  // user input창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();
  playButton.disabled = false;
  let chances = 5;
  resultArea.textContent = "Placeorder!!";
}

// 함수도 매개변수로 넘길 수 있다.

pickRandomNum();
