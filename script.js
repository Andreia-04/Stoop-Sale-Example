/*
document.getElementById('door').addEventListener('click', function() {
    document.body.innerHTML = `
            <div class = "container-img" id = "back-button"> <img src ="./assets/images/Button.png" class = "content-img"> </div>
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

*/

// Store original content
const originalContent = document.body.innerHTML;

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

// Function to load event details
function loadEventDetails() {
    // Define the event details HTML
    document.body.innerHTML = `
        <div class="container-img" id="back-button"><img src="./assets/images/button.png" class="content-img" alt="Back"></div>
        <div class="new-content">
            <h1>Event Details</h1>
            <p>Date: July 15, 2024</p>
            <p>Location: <a href="https://www.google.com/maps?q=Carroll+Gardens+on+the+Corner+of+Court+Street+and+2nd+Ave+in+South+Brooklyn,+NYC" target="_blank">Carroll Gardens on the Corner of Court Street and 2nd Ave in South Brooklyn, NYC</a></p>
            <p>Time: 10:00 AM - 4:00 PM</p>
            <p>Join us for a fun-filled day of shopping, food, and entertainment!</p>
        </div>
    `;
    
    // Add event listener to the back button
    document.getElementById('back-button').addEventListener('click', function() {
        // Restore the original content
        document.body.innerHTML = originalContent;

        // Reattach the event listeners
        document.getElementById('door').addEventListener('click', loadEventDetails);
        document.getElementById('bus-stop').addEventListener('click', function() {
            togglePlay();
        });
    });
}

// Event listener for clicking the door
document.getElementById('door').addEventListener('click', loadEventDetails);

// Event listener for clicking the bus stop sign
document.getElementById('bus-stop').addEventListener('click', function() {
    togglePlay();
});
