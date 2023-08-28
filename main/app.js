const item = document.querySelectorAll(".Item");
const wrapper = document.querySelector(".sliderWrapper");



item.forEach((items, index) => {
    items.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
