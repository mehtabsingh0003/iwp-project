document.getElementById('clickableImage').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const newImage = document.createElement('img');
    newImage.src = 'https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg?auto=compress&cs=tinysrgb&w=600'; // Replace with the path to the image you want to append
    newImage.alt = 'Appended Image';
    imageContainer.appendChild(newImage);
});
