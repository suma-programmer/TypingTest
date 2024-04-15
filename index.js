let button = document.querySelector("button");
let position = document.querySelector(".letter");
let start;
let i = 0;
const specialCharacters = new Set([8, 9, 13, 16, 17, 18, 19, 32]);
button.addEventListener("click", random);
button.addEventListener("click", () => {
  start = new Date().getTime();
});

function random() {
  const arr = [
    `Believe in yourself.`,
    `Problems are part and parcel of our life.`,
    `Backspace is not there in our lives.`,
    `Search key is not present in the physical books.`,
    `Value every oppurtunity.`,
    `Stand for yourself.`,
    `Helping hands are better than praying lips.`,
    `Follow your heart.`,
    `Hardwork always payoffs.`,
  ];
  document.querySelector(".end").textContent = "";
  let randomNumber = Math.floor(Math.random() * arr.length);
  word = arr[randomNumber];
  createDivs(word);
  document.addEventListener("keydown", check);
}

function createDivs(word) {
  clearDivs();
  for (let i = 0; i < word.length; i++) {
    const create = document.createElement("div");
    create.textContent = word.charAt(i);
    create.classList.add("piece");
    position.appendChild(create);
  }
  position.children[0].style.fontSize = "2.7rem";
}
function clearDivs() {
  i = 0;
  let child = position.children.length;
  for (let j = 0; j < child; j++) {
    position.removeChild(position.lastChild);
  }
}
let flag = 0;
function check(e) {
  let current = word.charAt(i);
  if (e.keyCode === 8) {
    if (i > 0) i--;
    position.children[i + 1].style.fontSize = "2.2rem";
    position.children[i].style.fontSize = "2.7rem";
    position.children[i].style.color = "rgb(157,76,249)";
    return;
  }
  if (e.shiftKey && flag === 0) {
    flag = 1;
    return;
  } else flag = 0;
  if (specialCharacters.has(e.keyCode)) {
    e.preventDefault();
  }
  console.log(e.key, " ", i, current);
  if (e.key === current) {
    position.children[i].style.color = "rgb(157, 76, 249)";
  } else if (e.key !== current) {
    position.children[i].style.color = "red";
  }
  position.children[i].style.fontSize = "2.2rem";
  i++;
  if (i !== word.length) present(position.children[i]);
  if (i === word.length) {
    document.removeEventListener("keydown", check);
    const stop = new Date().getTime();
    document.querySelector(".end").textContent = `${Math.round(
      (word.length / (stop - start)) * 12000
    )} WPM Please refresh to start again!!`;
    document.querySelector("button").textContent = "Refresh";
    i = 0;
    clearDivs();
  }
}

function present(element) {
  element.style.fontSize = "2.7rem";
}
