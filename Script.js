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

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".Main-scroll-container");
    const imageWidth = 380; // Width of one image
    const delay = 2000; // Pause duration (2 seconds)
    let scrollAmount = 0;

    // Duplicate images for smooth infinite scroll
    const images = document.querySelectorAll(".Main-scroll-container img");
    images.forEach(img => {
        const clone = img.cloneNode(true);
        scrollContainer.appendChild(clone);
    });

    function scrollImages() {
        scrollAmount += imageWidth;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0; // Reset scroll position
            scrollAmount = 0;
        }

        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });

        setTimeout(scrollImages, delay + 1000); // 2s pause + 1s scroll
    }

    let scrollTimeout = setTimeout(scrollImages, delay); // Start after delay

    // Pause scrolling on hover
    scrollContainer.addEventListener("mouseenter", () => {
        clearTimeout(scrollTimeout);
    });

    // Resume scrolling on mouse leave
    scrollContainer.addEventListener("mouseleave", () => {
        scrollTimeout = setTimeout(scrollImages, delay);
    });
});
