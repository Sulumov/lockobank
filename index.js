"use strict"
import "./src/scss/style.scss"
import $ from 'jquery'
import 'slick-carousel'

const htmlTag = document.querySelector("html");
const DynamicSize = currentWindowWidth => {
    currentWindowWidth = window.innerWidth;
    if (currentWindowWidth <= 1440 && currentWindowWidth > 813) {
        htmlTag.setAttribute(
            "style",
            `font-size: ${currentWindowWidth / 1440}px`
        );
    } else if (currentWindowWidth < 813 && currentWindowWidth >= 375) {
        htmlTag.setAttribute(
            "style",
            `font-size: ${currentWindowWidth / 375}px`
        );
    } else {
        htmlTag.setAttribute("style", `font-size: 1px`);
    }
};
window.onresize = () => {
    DynamicSize();
};
DynamicSize();

(() => {
    const burger = document.querySelector(".header__mobile-menu");
    const menu = document.querySelector(".header__nav");
    const body = document.querySelector("body");
    burger.addEventListener("click", e => {
        e.preventDefault();
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        body.classList.toggle("scroll-fix");
    })
})();

const accountList = document.querySelector('.account__list')

accountList.addEventListener('click', function (e) {
    const items = document.querySelectorAll('.account__item')
    const target = e.target
    Array.from(items).forEach(item => {
        item.classList.remove('account__item--active')
    })
    if (target.className === "account__item") {
        target.classList.add('account__item--active')
    }
})

function initSlider() {
    $('.advantages__list').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.account__list--mobile').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 914,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('#tariffs-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 914,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
}

initSlider()
$(document).on('ready', function () {
    initSlider();
});

const openWindow = () => $('.tariffs-modal').toggleClass('tariffs-modal--disable');

$('.tariffs-mobile__link').click((e) => {
    e.preventDefault();
    openWindow();
})

$('.tariffs-modal__button').click(() => openWindow());


const businessInfo = document.querySelector(".business__info")
const businessPrompt = document.querySelector(".business__prompt")

businessInfo.addEventListener("click", () => {
    businessPrompt.classList.add("business__prompt--block")
})
businessPrompt.addEventListener("mouseleave", () => {
    setTimeout(() => businessPrompt.classList.remove("business__prompt--block"), 300)
});


// tariffs tabs
$(document).ready(function () {
    $(".tariffs-tabs__link").click(function (e) {
        e.preventDefault()
        $(".tariffs-tabs__link").removeClass("active");
        $(".tariffs__content").removeClass("tariffs__content--active");

        $(this).addClass("active");
        $($(this).attr("href")).addClass("tariffs__content--active");

    });
    $(".tariffs-tabs__link:first").click()

})

//******************///

$(document).ready(function () {
    $(".account__item").click(function (e) {
        console.log(e.target)
        e.preventDefault()
        $(".account__item").removeClass("account__item--active");
        $(".account__subtitle").removeClass("account__subtitle--active");
        $(this).addClass("account__item--active");
        $($(this).attr("href")).addClass("account__subtitle--active");

    });
    $(".account__item:eq(1)").click()
    $(".open-modal").click(function (e) {
        e.preventDefault()
        $(".products-modal").removeClass("products-modal--active");
        $(this).addClass("products-modal--active");
        $($(this).attr("href")).addClass("products-modal--active");

    });
    $('.products-modal__close').on('click', e => {
        e.preventDefault()
        $(".products-modal").removeClass("products-modal--active");
    })

    $('.products-modal__close-link').on('click',e => {
        e.preventDefault()
        closeModal()
        $(".products-modal").removeClass("products-modal--active");
    })
    const closeModal = () => $('.products-modal').toggle()

})
$('.footer__legal-entity').on('click', e => {
    e.preventDefault()
    console.log(this)
    $(".footer__prompt").addClass("footer__prompt--active");
})
const footerPrompt = document.querySelector(".footer__prompt")

footerPrompt.addEventListener("mouseleave", () => {
    setTimeout(() => footerPrompt.classList.remove("footer__prompt--active"), 300)
});

