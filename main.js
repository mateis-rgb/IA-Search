const input = document.querySelector('input#search');
const form = document.querySelector('form');
const results = document.querySelector('div.results#results');

results.innerHTML = "coucou";

form.addEventListener("submit", (e) => {
	e.preventDefault();

	results.innerHTML = input.value;
});