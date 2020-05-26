console.log("loaded!");

(function () {
	"use strict";

	class Todo {
		constructor() {
			const input = document.querySelector("input");
			const addButton = document.querySelector(".addButton");
			const clearButton = document.querySelector(".clearButton");
			const list = document.querySelector("ul");
			function markDone(event) {
				const item = event.target;
				item.parentNode.classList.toggle("done");
			}
			function removeItem(event) {
				const removeButton = event.target;
				removeButton.parentNode.remove();
			}
			function addRemoveButton(item) {
				const removeButton = document.createElement("div");
				removeButton.className = "removeButton";
				removeButton.addEventListener("click", removeItem);
				item.appendChild(removeButton);
			}
			function addCheckbox(item) {
				const checkbox = document.createElement("input");
				checkbox.setAttribute("type", "checkbox");
				checkbox.addEventListener("click", markDone);
				item.insertBefore(checkbox, item.firstChild);
			}
			function addTextSpan(item, text) {
				const span = document.createElement("span");
				span.className = "text-span";
				span.innerText = text;
				item.insertBefore(span, item.firstChild.nextSibling);
			}
			function createItem(text) {
				const item = document.createElement("li");
				item.className = "todo-item";
				//item.innerText = text;
				addRemoveButton(item);
				addCheckbox(item);
				addTextSpan(item, text);
				return item;
			}
			function addItem(event) {
				const text = input.value;
				const item = createItem(text);
				list.appendChild(item);
				input.value = "";
			}
			function clearList(event) {
				while (list.hasChildNodes()) {
					list.removeChild(list.firstChild);
				}
			}
			this.addListeners = function () {
				addButton.addEventListener("click", addItem);
				clearButton.addEventListener("click", clearList);
			};
		}
		init() {
			this.addListeners();
		}
	}

	const todo = new Todo();
	window.addEventListener("load", todo.init());
})();
