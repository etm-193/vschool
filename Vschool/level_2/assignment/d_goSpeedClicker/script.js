// Function to update the click count display
function updateClickCount() {
    const clickCount = localStorage.getItem('clickCount') || 0;
    document.getElementById('clickCount').textContent = `Click Count: ${clickCount}`;
}

// Function to start the countdown timer
function startCountdown(seconds) {
    let timeLeft = seconds;
    const countdownElement = document.getElementById('countdown');

    const countdownInterval = setInterval(function() {
        countdownElement.textContent = timeLeft + ' seconds';
timeLeft--;


        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Time is up!';
            document.getElementById('clickButton').disabled = true;
        }
    });
}

//  button clicks
const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function() {
    let clickCount = localStorage.getItem('clickCount') || 0;
    clickCount = parseInt(clickCount, 10) + 1;
    localStorage.setItem('clickCount', clickCount);
    updateClickCount();
});

// Reset Button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    localStorage.removeItem('clickCount');
    updateClickCount();
    document.getElementById('clickButton').disabled = false; // Re-enable the button

});

// Initialize the click count and timer
updateClickCount();
startCountdown(20);