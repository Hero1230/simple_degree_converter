const convertBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const result = document.querySelector(".result");
const label = document.querySelector("label");

let changeOption = 0;

const celcToFar = () => {
	return converter.value * 1.8 + 32;
};
const farToCelc = () => {
	return (converter.value - 32) / 1.8;
};

const reset = () => {
	result.textContent = "";
	converter.value = "";
};

changeBtn.addEventListener("click", () => {
	if (changeOption === 1) {
		changeOption = 0;
		label.textContent = "Konwerter °F na °C";
		reset();
	} else {
		changeOption = 1;
		label.textContent = "Konwerter °C na °F";
		reset();
	}
});

convertBtn.addEventListener("click", () => {
	if (converter.value !== "" && converter.value != 0) {
		if (changeOption === 0) {
			result.textContent = `Wynik: ${celcToFar()}°F`;
			result.style.color = "lime";
		} else {
			result.textContent = `Wynik: ${farToCelc()}°C`;
			result.style.color = "lime";
		}
	} else {
		result.textContent = "Musisz podać wartość!";
		result.style.color = "tomato";
	}
});

resetBtn.addEventListener("click", reset);
