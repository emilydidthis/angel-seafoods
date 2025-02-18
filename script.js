
// ------- HERO CAROUSEL -------
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;


// Function to change slide
function changeSlide(index) {
    console.log("changing slide");
    slides[currentSlide].classList.remove("active"); // Hide current slide
    
    currentSlide = (index + slides.length) % slides.length; // Ensure looping
    slides[currentSlide].classList.add("active"); // Show new slide

    // Restart and play the new video
    const currentVideo = slides[currentSlide].querySelector(".hero-video");
    currentVideo.currentTime = 0; // Restart the video
    currentVideo.play();
    updateCurrentVideo();
}

// Button event listeners
prevBtn.addEventListener("click", () => changeSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => changeSlide(currentSlide + 1));

function updateCurrentVideo(){
    const currentVideo = slides[currentSlide].querySelector(".hero-video");
    currentVideo.addEventListener("timeupdate", checkTimeBeforeEnd);

    function checkTimeBeforeEnd() {
        if (currentVideo.currentTime >= currentVideo.duration - 1) {
            console.log("1 second before the video ends!");
            // Trigger your action here (e.g., change slide in a carousel)
            changeSlide(currentSlide + 1);
            currentVideo.removeEventListener("timeupdate", checkTimeBeforeEnd); // Remove the listener after triggering
        }
    }
}

// Play the first video initially
slides[currentSlide].querySelector(".hero-video").play();
updateCurrentVideo();

// ------- PRODUCTS CAROUSEL -------

// Get all thumbnails and figures
const thumbnails = document.querySelectorAll('.product-frame');
const figures = document.querySelectorAll('figure');

// Add click event listeners to each thumbnail
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Get the corresponding figure ID from the thumbnail's class
        const targetId = thumbnail.classList[1]; // e.g., "fresh-seafood"
        const targetFigure = document.getElementById(targetId);

        // Hide all figures
        figures.forEach((figure) => {
            figure.classList.remove('active');
        });

        // Show the corresponding figure
        if (targetFigure) {
            targetFigure.classList.add('active');
        }

        // Desaturate all others
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove('active');
        });

        // Saturate current tab
        thumbnail.classList.add('active');
    });
});

// Optionally, show the first figure by default
// if (figures.length > 0) {
//     figures[0].classList.add('active');
// }

// Carousel functionality
document.querySelectorAll('.main-product-frame').forEach((carousel) => {
    const inner = carousel.querySelector('.product-inner');
    const items = carousel.querySelectorAll('.product-item');
    const prevButton = carousel.querySelector('.product-prev');
    const nextButton = carousel.querySelector('.product-next');
    const indicatorsContainer = carousel.querySelector('.carousel-indicators');
    let currentIndex = 0;
    
    // Create indicator circles
    items.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showItem(currentIndex);
            updateIndicators(carousel, currentIndex);
        });
        indicatorsContainer.appendChild(indicator);
    });


    // Show the current item
    const showItem = (index) => {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    };

    // Update indicator states
    const updateIndicators = (carousel, index) => {
        const indicators = carousel.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    };


    // Go to the next item
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
        updateIndicators(carousel, currentIndex);
    });

    // Go to the previous item
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
        updateIndicators(carousel, currentIndex);
    });

    // Initialize the first item
    showItem(currentIndex);
});

// ------- FEATURES CAROUSEL -------
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
  order[0].style.transform = "translateX(-685px)";
  order[0].style.zIndex = "1"; // Outer image (left)

  order[1].style.transform = "translateX(0)";  // Middle stays in place
  order[1].style.zIndex = "2"; // Middle image (highest z-index)

  order[2].style.transform = "translateX(685px)";
  order[2].style.zIndex = "1"; // Outer image (right)

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


// PROCESSING VIDEO

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const video = document.getElementById("processing-video");

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            video.setAttribute("controls", "true"); // Show video controls
            playButton.style.display = "none"; // Hide button when video plays
        } else {
            video.pause();
            video.removeAttribute("controls"); // Hide controls when paused
            playButton.style.display = "block"; // Show button when paused
        }
    });

    // Optional: Show play button again when video ends
    video.addEventListener("ended", () => {
        playButton.style.display = "block";
        video.removeAttribute("controls"); // Hide controls when video ends
    });
});

