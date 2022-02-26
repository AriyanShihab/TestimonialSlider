$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

// dark lightt

let ligh = document.getElementById(`light`);
let dark = document.getElementById(`dark`);
console.log(dark);

light.addEventListener(`click`, () => {
    document.documentElement.removeAttribute("data-theme", "light");
});

dark.addEventListener(`click`, () => {
    document.documentElement.setAttribute("data-theme", "light");
});