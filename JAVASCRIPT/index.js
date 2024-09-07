$(document).ready(function () {
    var flightView = document.getElementById('flightView');
    var hotelView = document.getElementById('hotelView');
    var flightViewBtn = document.getElementById('flightViewBtn');
    var hotelViewBtn = document.getElementById('hotelViewBtn');
    hotelView.style.display = "none";

    $('.js-example-basic-single').select2();
    var swiper = new Swiper(".reviewsSlider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    flightViewBtn.addEventListener("click", function () {
        flightView.style.display = "block";
        hotelView.style.display = "none";
        flightViewBtn.classList.add("white-tab-btn-active");
        flightViewBtn.classList.remove("white-tab-btn");
        hotelViewBtn.classList.remove("white-tab-btn-active");
        hotelViewBtn.classList.add("white-tab-btn");
    })

    hotelViewBtn.addEventListener("click", function () {
        flightView.style.display = "none";
        hotelView.style.display = "block";
        hotelViewBtn.classList.add("white-tab-btn-active");
        hotelViewBtn.classList.remove("white-tab-btn");
        flightViewBtn.classList.remove("white-tab-btn-active");
        flightViewBtn.classList.add("white-tab-btn");
    })
});