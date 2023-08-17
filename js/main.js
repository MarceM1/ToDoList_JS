const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("ul");
const empty = document.querySelector("#empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDeleteBtn());

		input.value = "";
		empty.style.display = "none";

  } else {
    alert("Ingresa una tarea!");
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("buttom");

  deleteBtn.textContent = "X";
	deleteBtn.className ="btn-delete";

	deleteBtn.addEventListener('click', (e) => {

		const item = e.target.parentElement;

		ul.removeChild(item);

		const items = document.querySelectorAll("li");

		if (items.length === 0) {
			empty.style.display ="block";
		}
	});

	return deleteBtn;
}
