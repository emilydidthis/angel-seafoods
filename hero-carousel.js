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
