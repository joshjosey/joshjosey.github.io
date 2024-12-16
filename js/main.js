function createSlideshow(containerSelector, interval = 10000) {
    // Initialize a counter
    let imageNumber = 0;

    // Grab the images within the specific container
    const container = document.querySelector(containerSelector);
    const images = container.querySelectorAll('.fade-imgs img');
    const currentImg = container.querySelector('.current');

    // Ensure there are images to cycle through
    if (!images.length || !currentImg) return;

    // Use the setInterval function to change the image every few seconds
    setInterval(() => {
        // Update the image source
        currentImg.src = images[imageNumber].src;

        // Make the image fade in
        currentImg.classList.add('fade-in');

        // Remove the fade class after fading in
        setTimeout(() => currentImg.classList.remove('fade-in'), 1000);

        // Increment the index
        imageNumber++;
        if (imageNumber >= images.length) {
            imageNumber = 0;
        }
    }, interval);
}

// Initialize multiple slideshows
createSlideshow('#academicSlideshow',Math.random() * 7500 + 7500);
createSlideshow('#abroadSlideshow',Math.random() * 7500 + 7500);
createSlideshow('#campSlideshow', Math.random() * 7500 + 7500);
createSlideshow('#hobbySlideshow',Math.random() * 7500 + 7500);