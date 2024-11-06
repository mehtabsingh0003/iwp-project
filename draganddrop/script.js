const list = document.getElementById("draggableList");
let draggingItem = null;

document.querySelectorAll(".draggable-item").forEach(item => {
    item.addEventListener("dragstart", () => {
        draggingItem = item;
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        draggingItem = null;
        item.classList.remove("dragging");
    });

    item.addEventListener("dragover", e => {
        e.preventDefault();
        const draggingOverItem = e.target;
        if (draggingOverItem && draggingOverItem !== draggingItem && draggingOverItem.classList.contains("draggable-item")) {
            const bounding = draggingOverItem.getBoundingClientRect();
            const offset = e.clientY - bounding.top + (bounding.height / 2);
            if (offset > bounding.height / 2) {
                draggingOverItem.after(draggingItem);
            } else {
                draggingOverItem.before(draggingItem);
            }
        }
    });

    item.addEventListener("drop", () => {
        item.classList.remove("over");
    });

    item.addEventListener("dragenter", () => {
        item.classList.add("over");
    });

    item.addEventListener("dragleave", () => {
        item.classList.remove("over");
    });
});
