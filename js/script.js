$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 3,
            nav: true,
        },
        1200: {
            items: 4,
            nav: true,
        },
    },
});

// dark light

let ligh = document.getElementById(`light`);
let dark = document.getElementById(`dark`);

ligh.addEventListener(`click`, () => {
    document.documentElement.removeAttribute("data-theme", "light");
});

dark.addEventListener(`click`, () => {
    document.documentElement.setAttribute("data-theme", "light");
});