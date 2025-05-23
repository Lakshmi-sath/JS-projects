const accessKey = "XXVn0PZHCtEtKxJZv2fIPqOinNspZ6LQBD8LeqbSZqw";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");

const showMoreBtn = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImage() {
	keyword = searchBox.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

	const response = await fetch(url);
	const data = await response.json();

	if (page === 1) {
		searchResults.innerHTML = "";
	}

	const results = data.results;

	results.map((result) => {
		const image = document.createElement("img");
		image.src = result.urls.small;
		const imageLink = document.createElement("a");
		imageLink.href = result.links.html;
		imageLink.target = "_blank";
		imageLink.appendChild(image);

		searchResults.appendChild(imageLink);
	});
	showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	page = 1;
	searchImage();
});

showMoreBtn.addEventListener("click", () => {
	page++;
	searchImage();
});
