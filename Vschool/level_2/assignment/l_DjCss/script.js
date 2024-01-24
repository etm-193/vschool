// Get all the radio inputs and the text input field
var colorRadios = document.querySelectorAll('input[name="colorOption"]');
var textOption = document.getElementById("textOption");
var boxes = document.querySelectorAll(".box");

// Function to update the box's background color based on the text input
function updateBoxColor() {
    var selectedColor = textOption.value.toLowerCase();
    
    // Set the background color of the boxes
    boxes.forEach(function (box) {
        box.style.backgroundColor = selectedColor;
    });
}

// Add a change event listener to the text input
textOption.addEventListener("input", function () {
    // Update the box's background color based on the text input
    updateBoxColor();
});

// Add a change event listener to each radio input
colorRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
        // Update the text input with the selected color
        textOption.value = this.value.toLowerCase();
        
        // Update the box's background color based on the text input
        updateBoxColor();
    });
});
