function calculateArea() {
    const radius = parseFloat(document.getElementById('radius').value);
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('result').textContent = "Please enter a valid radius.";
    } else {
        const area = Math.PI * Math.pow(radius, 2);
        document.getElementById('result').textContent = `Area of the circle: ${area.toFixed(2)}`;
    }
}
