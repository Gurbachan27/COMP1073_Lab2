document.addEventListener('DOMContentLoaded', () => {
    // Constants for the input sliders and body element
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const body = document.body;

   // Function to update the background color
   function updateBackgroundColor() {
    // Get the values for each slider (0-255)
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // RGB Color string
    const rgbColor = rgb(${red}, ${green}, ${blue});

    // Update the background color
    body.style.backgroundColor = rgbColor;
}


});
