const scrollContainer = document.querySelector(".scroll-container");

function autoScrollLeft() {
    if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Loop back to end
    } else {
        scrollContainer.scrollLeft -= 1; // Adjust speed (Increase for faster scroll)
    }
}

let scrollInterval = setInterval(autoScrollLeft, 20); // Adjust timing for smoothness

// Pause scrolling on hover
scrollContainer.addEventListener("mouseenter", () => {
    clearInterval(scrollInterval);
});

// Resume scrolling on mouse leave
scrollContainer.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(autoScrollLeft, 20);
});

const images = document.querySelectorAll(".scroll-container img");
images.forEach(img => {
    const clone = img.cloneNode(true);
    scrollContainer.appendChild(clone);
});
