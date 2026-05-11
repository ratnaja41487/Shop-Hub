var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // This creates the exact "peek" effect from your reference photo
    breakpoints: {
        768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        }
    }
});