const scrollContainer = document.querySelector(".scroll-container");
const leftArrow = document.querySelector(".scroll-arrow.left");
const rightArrow = document.querySelector(".scroll-arrow.right");

// Calculate one image scroll width (with gap)
const imageWidth = 396 + 16; // 300px width + ~1rem gap

leftArrow.addEventListener("click", () => {
    scrollContainer.scrollLeft -= imageWidth;
});

rightArrow.addEventListener("click", () => {
    scrollContainer.scrollLeft += imageWidth;
});

const taglines = [
    "Pesticide Free",
    "Nutrient Dense",
    "Bursting with Flavour",
    "Sustainably Grown Indoors",
    "Freshly Harvested"
];

const taglineEl = document.querySelector(".tagline");
let index = 0;

setInterval(() => {
    taglineEl.classList.add("fade-out");

    setTimeout(() => {
        index = (index + 1) % taglines.length;
        taglineEl.textContent = taglines[index];
        taglineEl.classList.remove("fade-out");
    }, 500); // match fade out duration
}, 2500); // change every 5 seconds (sync with background)

