window.addEventListener("load", function () {
    const image = document.getElementById("content_nav");
    setTimeout(() => {
        image.style.opacity = 1;
        image.style.transform = "translateY(0)";
    }, 50);
});

window.addEventListener("load", function () {
    const image = document.getElementById("dog");
    setTimeout(() => {
        image.style.opacity = 1;
        image.style.transform = "translateY(0)";
    }, 100);
});

window.addEventListener("load", function () {
    const image = document.getElementById("text_X");
    setTimeout(() => {
        image.style.opacity = 1;
        image.style.transform = "translateX(0)";
    }, 1000);
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 110) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});