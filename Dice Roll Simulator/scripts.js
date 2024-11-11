const btnEl = document.getElementById("btn");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
	var randomImage = new Array();

	randomImage[0] = "./images/One.png";
	randomImage[1] = "./images/Two.png";
	randomImage[2] = "./images/Three.png";
	randomImage[3] = "./images/Four.png";
	randomImage[4] = "./images/Five.png";
	randomImage[5] = "./images/Six.png";

	var number = Math.floor(Math.random() * randomImage.length);
  diceEl.innerHTML = '<img src="' + randomImage[number] + '"/>';
  historyList.push(randomImage[number]);
  updateRollHistory();  
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <img src="${historyList[i]}" alt="Dice image" />`
    rollHistoryEl.appendChild(listItem);
  }
}

btnEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 400)
});
