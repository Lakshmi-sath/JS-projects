const passwordBox = document.getElementById("password");

const copyText = document.querySelector(".svg");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const char = "!@#$%^&*()_+-;:'~/?|,.[]{}";

const allChar = upperCase + lowerCase + numbers + char;

function generatePassword() {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += char[Math.floor(Math.random() * char.length)];

	while (length > password.length) {
		password += allChar[Math.floor(Math.random() * allChar.length)];
	}
	passwordBox.value = password;
}

function copyPassword() {
	passwordBox.select();
	document.execCommand("copy");
}
