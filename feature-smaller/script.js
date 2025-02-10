const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2"); // Middle image (Fixed)
const img3 = document.getElementById("img3");

// Track the current order of images
let order = [img1, img2, img3];


// Function to swap images correctly
function swapImages(clickedImage) {
  if (clickedImage === order[0]) {
    // Shift left: [3, 1, 2]
    order = [order[2], order[0], order[1]];
  } else if (clickedImage === order[2]) {
    // Shift right: [2, 3, 1]
    order = [order[1], order[2], order[0]];
  }
  
  // Remove fixed from all elements except clicked
  order.forEach((element) => element.classList.remove('fixed'));
  clickedImage.classList.add('fixed');

  // Apply new positions
  order[0].style.transform = "translateX(-120px)";
  order[1].style.transform = "translateX(0)";  // Middle stays in place
  order[2].style.transform = "translateX(120px)";

  // Remove all event listeners first
  img1.removeEventListener("click", swapClickHandler);
  img3.removeEventListener("click", swapClickHandler);

  //Reattach event listeners only to the new outer images
  order[0].addEventListener("click", swapClickHandler);
  order[2].addEventListener("click", swapClickHandler);
}

// Helper function for handling clicks
function swapClickHandler(event) {
  swapImages(event.target);
}

// Attach Initial Click Listeners
order[0].addEventListener("click", swapClickHandler);
order[2].addEventListener("click", swapClickHandler);
