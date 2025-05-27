const billInput = document.getElementById("amt");
const tipInput = document.getElementById("tip");

const totalAmt = document.getElementById("total-amt");

const btnEl = document.getElementById("btn");

function finalPay() {
	const billAmt = billInput.value;
	const tipPercent = tipInput.value;
	const totalValue = billAmt * (1 + tipPercent / 100);

	totalAmt.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", finalPay);
