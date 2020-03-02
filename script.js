const button = document.getElementById("addButton");
const input = document.getElementById("textInput");
const ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.classList.add("listItem");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", setDone);
	ul.appendChild(li);
	// toggle items as done
	function setDone() {
		li.classList.toggle("done")
	}
	// delete list button
	let delButton = document.createElement("button");
	let delCan = document.createElement("i");
	delCan.classList.add ("far", "fa-trash-alt")
	delButton.classList.add("delButton");
	delButton.appendChild(delCan);
	delButton.addEventListener('click', delItem);
	li.append(delButton);
	function delItem () {
		li.remove();
	}
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);