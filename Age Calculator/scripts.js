let userInput = document.getElementById("date");
const result = document.getElementById("age-result");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
	let birthDate = new Date(userInput.value);
	let today = new Date();

	if (!userInput.value) {
		result.textContent = "Please select your date of birth.";
		return;
	}

	let currentDay = today.getDate();
	let currentMonth = today.getMonth();
	let currentYear = today.getFullYear();

	let birthDay = birthDate.getDate();
	let birthMonth = birthDate.getMonth();
	let birthYear = birthDate.getFullYear();

	let day, month, year;

	if (currentDay >= birthDay) {
		day = currentDay - birthDay;
	} else {
		currentMonth--;
		day = currentDay + new Date(currentYear, currentMonth + 1, 0).getDate() - birthDay;
	}

	if (currentMonth >= birthMonth) {
		month = currentMonth - birthMonth;
	} else {
		currentYear--;
		month = currentMonth + 12 - birthMonth;
	}

	year = currentYear - birthYear;

	result.textContent = `You are ${year} years, ${month} months, and ${day} days old.`;
}
