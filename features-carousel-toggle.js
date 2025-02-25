// document.addEventListener("DOMContentLoaded", function () {


//     let resizeTimeout;
//     let currentSlide = 0;
//     const slides = document.querySelectorAll(".feature-image");
//     const indicatorsContainer = document.getElementById("feature-indicators");

//     // function initCarousel() {
//     //     if (window.matchMedia("(max-width: 862px)").matches) {
//     //         // setupMobileCarousel();
//     //         indicatorsContainer.style.display = "flex";
//     //     } else {
//     //         setupDesktopFeatureSwap();
//     //         indicatorsContainer.style.display = "none";
//     //     }
//     // }

//     // Create indicators dynamically
//     slides.forEach((_, index) => {
//         const indicator = document.createElement("div");
//         indicator.classList.add("indicator");
//         if (index === 1) indicator.classList.add("active"); // Mark first as active

//         // Add click event to go to specific slide
//         indicator.addEventListener("click", () => {
//             changeSlide(index);
//         });

//         indicatorsContainer.appendChild(indicator);
//     });

    
//     // Update active indicator when slide changes
//     function updateIndicators() {
//         document.querySelectorAll("#feature-indicators .indicator").forEach((indicator, index) => {
//             indicator.classList.toggle("active", index === currentSlide);
//         });
//     }

//     // Function to change slide
//     function changeSlide(index) {
//         // console.log("changing slide, index:", index);
//         slides[currentSlide].classList.remove("fixed"); // Hide current slide
        
//         currentSlide = (index + slides.length) % slides.length; // Ensure looping
//         slides[currentSlide].classList.add("fixed"); // Show new slide

//         updateIndicators();
//     }

//     function setupMobileCarousel() {
//         console.log("Switching to Mobile Carousel");
//         cleanupDesktopCarousel();
//     }
    

//     function setupDesktopFeatureSwap() {
//         console.log("Switching to Desktop Feature Swap");
//         // cleanupMobileCarousel(); // Remove old event listeners from mobile mode

//         const img1 = document.getElementById("img1");
//         const img2 = document.getElementById("img2"); // Middle image (Fixed)
//         const img3 = document.getElementById("img3");

//         // Track the current order of images
//         let order = [img1, img2, img3];
        
//         // Function to swap images correctly
//         function swapImages(clickedImage) {
//             if (clickedImage === order[0]) {
//                 // Shift left: [3, 1, 2]
//                 order = [order[2], order[0], order[1]];
//             } else if (clickedImage === order[2]) {
//                 // Shift right: [2, 3, 1]
//                 order = [order[1], order[2], order[0]];
//             }
            
//             // Remove fixed from all elements except clicked
//             order.forEach((element) => element.classList.remove('fixed'));
//             clickedImage.classList.add('fixed');

//             // Force a reflow to ensure z-index is applied before the transition
//             void order[0].offsetHeight;
//             void order[1].offsetHeight;
//             void order[2].offsetHeight;

//             // Apply new positions
//             order[0].style.transform = "translateX(-685px) translateY(106.5px)"; // Move left and down
//             order[0].style.zIndex = "1"; // Outer image (left)
            
//             order[1].style.transform = "translateX(0) translateY(0px)"; // Center and move up
//             order[1].style.zIndex = "10"; // Middle image (highest z-index)
            
//             order[2].style.transform = "translateX(685px) translateY(106.5px)"; // Move right and down
//             order[2].style.zIndex = "1"; // Outer image (right)

//             // Remove all event listeners first
//             img1.removeEventListener("click", swapClickHandler);
//             img3.removeEventListener("click", swapClickHandler);

//             //Reattach event listeners only to the new outer images
//             order[0].addEventListener("click", swapClickHandler);
//             order[2].addEventListener("click", swapClickHandler);
//         }


//         // Helper function for handling clicks
//         function swapClickHandler(event) {
//             swapImages(event.target);
//         }

//         // Attach Initial Click Listeners
//         order[0].addEventListener("click", swapClickHandler);
//         order[2].addEventListener("click", swapClickHandler);
//     }

    

//     // function cleanupDesktopCarousel() {
//     //     const img1 = document.getElementById("img1");
//     //     const img3 = document.getElementById("img3");

//     //     if (img1) img1.removeEventListener("click", swapClickHandler);
//     //     if (img3) img3.removeEventListener("click", swapClickHandler);
//     // }



//     // Initialize on page load
//     initCarousel();

//     // Listen for window resize and debounce changes
//     window.addEventListener("resize", function () {
//         clearTimeout(resizeTimeout);
//         resizeTimeout = setTimeout(initCarousel, 200); // Wait for resizing to finish before switching
//     });
// });
