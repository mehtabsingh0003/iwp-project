// Get the list of items
const itemList = document.getElementById('itemList');
const removeAllButton = document.getElementById('removeAllButton');

// Add an event listener to the list to handle remove button clicks
itemList.addEventListener('click', function(event) {
    // Check if the clicked element is a remove button
    if (event.target.classList.contains('remove-button')) {
        // Get the parent list item of the button
        const itemToRemove = event.target.parentElement;
        // Remove the item from the DOM
        itemList.removeChild(itemToRemove);
    }
});

// Add an event listener to the "Remove All" button
removeAllButton.addEventListener('click', function() {
    // Remove all items from the list
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
});
