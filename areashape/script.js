// Show input field for circle and hide square section
document.getElementById('circleButton').addEventListener('click', function () {
    document.getElementById('circleSection').classList.remove('hidden');
    document.getElementById('squareSection').classList.add('hidden');
    document.getElementById('circleRadius').value = ''; // Clear previous input
    document.getElementById('circleResult').textContent = ''; // Clear previous result
});

// Show input field for square and hide circle section
document.getElementById('squareButton').addEventListener('click', function () {
    document.getElementById('squareSection').classList.remove('hidden');
    document.getElementById('circleSection').classList.add('hidden');
    document.getElementById('squareSide').value = ''; // Clear previous input
    document.getElementById('squareResult').textContent = ''; // Clear previous result
});

// Calculate circle area
document.getElementById('calculateCircle').addEventListener('click', function () {
    const radius = parseFloat(document.getElementById('circleRadius').value);
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('circleResult').textContent = "Please enter a valid radius.";
    } else {
        const area = Math.PI * Math.pow(radius, 2);
        document.getElementById('circleResult').textContent = `Area of the circle: ${area.toFixed(2)}`;
    }
});

// Calculate square area
document.getElementById('calculateSquare').addEventListener('click', function () {
    const side = parseFloat(document.getElementById('squareSide').value);
    if (isNaN(side) || side <= 0) {
        document.getElementById('squareResult').textContent = "Please enter a valid side length.";
    } else {
        const area = Math.pow(side, 2);
        document.getElementById('squareResult').textContent = `Area of the square: ${area.toFixed(2)}`;
    }
});
