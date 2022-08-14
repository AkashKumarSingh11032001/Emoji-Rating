const starsEl = document.querySelectorAll(".fa-star")
// console.log(starsEl)
const emojisEl = document.querySelectorAll(".far")
// console.log(emojisEl)

starsEl.forEach((x, index) => {
    x.addEventListener("click", () => {
        updateRating(index)
    });
});

function updateRating(index) {
    starsEl.forEach((x, idx) => {
        // adding active class to all prev star before index+1
        if (idx < index + 1) {
            x.classList.add("active");
        } else {
            x.classList.remove("active");
        }
    });
    emojisEl.forEach((y) => {
        y.style.transform = `translateX(-${index * 50}px)`;
    });
}