const parent = document.body.querySelector(".items");
const addChildBtn = document.body.querySelector("#add");
const textBox = document.body.querySelector("#input");

addChildBtn.addEventListener('click', () => {
    const child = document.createElement("div");
    child.classList.add("child");
    child.textContent = textBox.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteButton");
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener('click', () => {
        parent.removeChild(child);
    });

    child.appendChild(deleteBtn);
    parent.appendChild(child);
    textBox.value = '';
});
//The child element is a local variable inside the event handler. When you attach
//the delete button's event listener within this scope, it has access to the child
// element and can remove it from the parent when the button is clicked.