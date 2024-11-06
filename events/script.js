// Get references to the parent elements
const parent1 = document.getElementById('parent1');
const parent2 = document.getElementById('parent2');
const parent3 = document.getElementById('parent3');
const childButton = document.getElementById('child');

// Function to handle click events for parents
function handleParentClick(event) {
    const parentId = this.id; // Get the id of the current parent
    console.log(`Clicked: ${parentId}`);
    alert(`You clicked on ${parentId}`);
}

// Function to handle click event for the child button
function handleChildClick(event) {
    alert('Child button clicked!');
    event.stopPropagation(); // Stop the event from propagating to parents
}

// Add event listeners to each parent
parent1.addEventListener('click', handleParentClick);
parent2.addEventListener('click', handleParentClick);
parent3.addEventListener('click', handleParentClick);

// Add event listener to the child button
childButton.addEventListener('click', handleChildClick);
