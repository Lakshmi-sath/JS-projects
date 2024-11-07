const btnEl = document.getElementById("btn");
const finalOp = document.getElementById("final-output");
const dobEl = document.querySelector("input");

function calculateAge() {
	const dobValue = dobEl.value;
	if (dobValue === "") {
		alert("Please enter the valid Date of Birth!");
	} else {
		const {years, month, days} = getAge(dobValue);
		finalOp.innerText = `You are ${years} years ${month} months ${days} days old.`;
	}
}

function getAge(dobValue) {
	const currentDate = new Date();
	const birthDate = new Date(dobValue);
	let years = currentDate.getFullYear() - birthDate.getFullYear();
	let month = currentDate.getMonth() - birthDate.getMonth();
	let days = currentDate.getDate() - birthDate.getDate();

	if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
		years--;
		month = 12 + month;
	}
	if (days < 0) {
		month--;
		var prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
		days = prevMonth.getDate() - birthDate.getDate() + currentDate.getDate();
	}

	return {years, month, days};
}

btnEl.addEventListener("click", calculateAge);
