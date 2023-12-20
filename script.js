// Assuming you have a function to show/hide the overlay
function toggleOverlay() {
  var body = document.body;
  body.classList.toggle('overlay-hidden');
}

// Example: Trigger the overlay toggle when clicking on a button
var overlayButton = document.getElementById('yourOverlayButtonId');
overlayButton.addEventListener('click', toggleOverlay);


