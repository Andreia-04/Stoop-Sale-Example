

document.getElementById('door').addEventListener('click', function() {
    document.body.innerHTML = `
            <div class = "container-img"> <img src ="./assets/images/button.png" class = "content-img"> </div>
            <div class = "new-content">
            <h1>Event Details</h1>
            <p>Date: July 15, 2024</p>
            <p>Location: 123 Main St, Your City</p>
            <p>Time: 10:00 AM - 4:00 PM</p>
            <p>Join us for a fun-filled day of shopping, food, and entertainment!</p>
        </div>
    `;
});


// Audio element
var audio = new Audio('./assets/Stoop-Sale.mp3');
var isPlaying = false;

// Function to toggle play/pause
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}

// Event listener for clicking the bus stop sign
document.getElementById('bus-stop').addEventListener('click', function() {
    togglePlay();
});