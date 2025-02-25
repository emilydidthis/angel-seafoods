// ------- NAVIGATION HAMBURGER TOGGLE -------
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector("nav");

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});


// ------- CHANGE BUTTON ON ACTIVE PRESS -------
// Select all buttons with the class .hero-nav-button
const navButtons = document.querySelectorAll('.nav-button');

// Add event listeners to each button
navButtons.forEach(button => {
    const img = button.querySelector('img'); // Get the image inside the button

    // Change to active image on mousedown
    button.addEventListener('mousedown', () => {
        img.src = button.dataset.active; // Use data-active attribute
    });

    // Revert to default image on mouseup
    button.addEventListener('mouseup', () => {
        img.src = button.dataset.default; // Use data-default attribute
    });

    // Revert to default image if mouse leaves while clicked
    button.addEventListener('mouseleave', () => {
        img.src = button.dataset.default; // Use data-default attribute
    });
});


// ------- HERO CAROUSEL -------
const slides = document.querySelectorAll(".carousel-slide");
const indicatorsContainer = document.getElementById("hero-indicators");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;

 // Create indicators dynamically
 slides.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === 0) indicator.classList.add("active"); // Mark first as active

    // Add click event to go to specific slide
    indicator.addEventListener("click", () => {
        changeSlide(index);
    });

    indicatorsContainer.appendChild(indicator);
});

// Update active indicator when slide changes
function updateIndicators() {
    document.querySelectorAll("#hero-indicators .indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
    });
}

// Function to change slide
function changeSlide(index) {
    // console.log("changing slide, index:", index);
    slides[currentSlide].classList.remove("active"); // Hide current slide
    
    currentSlide = (index + slides.length) % slides.length; // Ensure looping
    slides[currentSlide].classList.add("active"); // Show new slide

    // Restart and play the new video
    const currentVideo = slides[currentSlide].querySelector(".hero-video");
    currentVideo.currentTime = 0; // Restart the video
    currentVideo.play();
    updateCurrentVideo();
    updateIndicators();
}

// Button event listeners
prevBtn.addEventListener("click", () => changeSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => changeSlide(currentSlide + 1));

function updateCurrentVideo(){
    const currentVideo = slides[currentSlide].querySelector(".hero-video");
    currentVideo.addEventListener("timeupdate", checkTimeBeforeEnd);

    function checkTimeBeforeEnd() {
        const currentVideo = slides[currentSlide].querySelector(".hero-video");
        if (currentVideo.currentTime >= currentVideo.duration - 1) {
            
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
        console.log(targetId)
        const targetFigure = document.getElementById(targetId);
        console.log(targetFigure)

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
    const prevButton = carousel.querySelector('.prev-btn');
    const nextButton = carousel.querySelector('.next-btn');
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

// Listen for window resize and debounce changes
window.addEventListener("resize", function () {
    toggleCarousel();
});

function toggleCarousel() {
    console.log("toggling carousel")
    if (window.matchMedia("(max-width: 862px)").matches) {
        order[0].style.transform = "translateX(0px) translateY(0px)"; // Move left and down
        order[1].style.transform = "translateX(0px) translateY(0px)"; // Center and move up
        order[2].style.transform = "translateX(0px) translateY(0px)"; // Move right and down
    } else {
        swapImages();
    }
}

let feature_currentSlide = 1;
const feature_slides = document.querySelectorAll(".feature-image");
const feature_indicatorsContainer = document.getElementById("feature-indicators");
// Create indicators dynamically
    feature_slides.forEach((_, index) => {
        console.log("creating feature indicators")
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        if (index === 1) indicator.classList.add("active"); // start with middle picture

        // Add click event to go to specific slide
        indicator.addEventListener("click", () => {
            feature_changeSlide(index);
        });

        feature_indicatorsContainer.appendChild(indicator);
    });

    
    // Update active indicator when slide changes
    function feature_updateIndicators() {
        document.querySelectorAll("#feature-indicators .indicator").forEach((indicator, index) => {
            indicator.classList.toggle("active", index === feature_currentSlide);
        });
    }

    // Function to change slide
    function feature_changeSlide(index) {
        feature_slides[feature_currentSlide].classList.remove("fixed"); // Hide current slide
        
        feature_currentSlide = (index + feature_slides.length) % feature_slides.length; // Ensure looping
        feature_slides[feature_currentSlide].classList.add("fixed"); // Show new slide

        // re-order images so that "active" image is always in position 1
        order = [feature_slides[(feature_currentSlide - 1 + feature_slides.length) % feature_slides.length], feature_slides[feature_currentSlide], feature_slides[(feature_currentSlide + 1) % feature_slides.length]]
        feature_updateIndicators();
    }


const img1 = document.getElementById("img1"); // slides[0]
const img2 = document.getElementById("img2"); // Middle image (Fixed) // slides[1]
const img3 = document.getElementById("img3"); // slides[2]

// Track the current order of images
let order = [img1, img2, img3];

// Function to swap images correctly
function swapImages(clickedImage) {

    if (clickedImage) {
        if (clickedImage === order[0]) {
            // Shift left: [3, 1, 2]
            order = [order[2], order[0], order[1]];
            feature_currentSlide = (feature_currentSlide - 1 + order.length) % order.length;
        } else if (clickedImage === order[2]) {
            // Shift right: [2, 3, 1]
            order = [order[1], order[2], order[0]];
            feature_currentSlide = (feature_currentSlide + 1 ) % order.length;
        }
        console.log(feature_currentSlide);
        feature_updateIndicators();
        // Remove fixed from all elements except clicked
        order.forEach((element) => element.classList.remove('fixed'));
        clickedImage.classList.add('fixed');
    }
    
  // Force a reflow to ensure z-index is applied before the transition
  void order[0].offsetHeight;
  void order[1].offsetHeight;
  void order[2].offsetHeight;

  // Apply new positions
  order[0].style.transform = "translateX(-685px) translateY(106.5px)"; // Move left and down
  order[0].style.zIndex = "1"; // Outer image (left)
  
  order[1].style.transform = "translateX(0) translateY(0px)"; // Center and move up
  order[1].style.zIndex = "10"; // Middle image (highest z-index)
  
  order[2].style.transform = "translateX(685px) translateY(106.5px)"; // Move right and down
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
    console.log("swap click handler");
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

