let currentImageIndex = 0; // Variable to keep track of the current image index
const images = []; // Array to store the image sources
let startX = 0; // To store the starting X position of the swipe

function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");

    // Show the modal and set the image source
    modal.style.display = "flex";
    modalImage.src = src;

    // Set the current image index based on the clicked thumbnail
    currentImageIndex = Array.from(document.querySelectorAll('.thumbnail')).findIndex(img => img.src === src);

    // Populate images array if empty or after clearing
    if (images.length === 0) {
        document.querySelectorAll('.thumbnail').forEach(img => images.push(img.src));
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Hide the modal
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length; // Update current image index
    const modalImage = document.getElementById("modal-image");
    modalImage.src = images[currentImageIndex]; // Change the modal image source
}

// Keyboard navigation for modal
document.addEventListener('keydown', (event) => {
    const modal = document.getElementById("modal");
    if (modal.style.display === "flex") {
        if (event.key === 'ArrowRight') {
            changeImage(1); // Next image
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1); // Previous image
        } else if (event.key === 'Escape') {
            closeModal(); // Close modal on Escape key
        }
    }
});

// Touch event listeners for mobile swipe navigation
document.getElementById('modal').addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Get the starting X coordinate of the touch
});

document.getElementById('modal').addEventListener('touchmove', (event) => {
    event.preventDefault(); // Prevent scrolling while swiping in modal
});

document.getElementById('modal').addEventListener('touchend', (event) => {
    const endX = event.changedTouches[0].clientX; // Get the ending X coordinate of the touch
    const distance = endX - startX;

    if (Math.abs(distance) > 50) { // Check if swipe distance is significant
        if (distance < 0) {
            changeImage(1); // Swipe left, show next image
        } else {
            changeImage(-1); // Swipe right, show previous image
        }
    }
});
