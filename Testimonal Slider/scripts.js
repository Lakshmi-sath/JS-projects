const testimonals = [
  {
		name: "-James Parker",
		photoUrl: "images/pic-1.jpg",
		text: '"I love the exceptional camera quality that captures every moment with vivid clarity."',
	},
	{
		name: "-Rachel Cooper",
		photoUrl: "images/pic-2.jpg",
		text: '"This smartphone has revolutionized my daily routine with its smooth performance and stunning display!"',
	},

	{
		name: "-Liam Davis",
		photoUrl: "images/pic-4.jpg",
		text: '"Sleek design, lightning-fast processor, and user-friendly interface. Simply the best phone I have owned!"',
	},

  {
		name: "-Ava Thompson",
		photoUrl: "images/pic-3.jpg",
		text: '"The battery life is impressive; it easily lasts me the entire day without needing a recharge."',
	},
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userName = document.querySelector(".name");

let idx = 0;

updateTestimonals();

function updateTestimonals() {
	const { name, photoUrl, text } = testimonals[idx];
	imgEl.src = photoUrl;
	textEl.innerText = text;
	userName.innerText = name;
	idx++;
	if (idx === testimonals.length) {
		idx = 0;
	}
	setTimeout(() => {
		updateTestimonals();
	}, 4000);
}
