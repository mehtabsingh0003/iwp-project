document.getElementById('toggleButton').addEventListener('click', function() {
    const hiddenImage = document.getElementById('hiddenImage');

    if (hiddenImage.classList.contains('hidden')) {
        hiddenImage.classList.remove('hidden'); // Remove the 'hidden' class to show the image
        this.textContent = 'Hide Image'; // Change button text
    } else {
        hiddenImage.classList.add('hidden'); // Add the 'hidden' class to hide the image
        this.textContent = 'Show Image'; // Change button text
    }
});
