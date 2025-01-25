import { FactoryMedia } from "../models/factoryMedia.js";
import { getMediaDataProfile } from "../services/getMediaDataProfile.js";

export const displayLightBox = async () => {
    const elems = {
        headerContainer: document.querySelector(".header"),
        mainContainer: document.querySelector(".main"),
        lightBoxContainer: document.querySelector("#lightBox"),
        slidesContainer: document.querySelector(".lightBox__ctn__ctn-slides"),
        buttonClose: document.querySelector(".button--closeLightBox"),
        buttonPrev: document.querySelector(".button--prevLightBox"),
        buttonNext: document.querySelector(".button--nextLightBox"),
    };

    let slides = [];

    const uploadMedia = async () => {
        const mediaData = await getMediaDataProfile();
        mediaData.forEach((elem) => {
            const model = new FactoryMedia(elem);
            const template = model.carrouselCard();
            template.dataset.id = elem.id;
            elems.slidesContainer.appendChild(template);
        });
        slides = Array.from(document.querySelectorAll(".lightBox__ctn__ctn-slides__slide"));
    };

    const showSlide = (id) => {
        slides.forEach((slide) => {
            if (slide.dataset.id === id) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    };

    const navigateToIndex = (currentIndex, direction) => {
        const nextIndex = (currentIndex + direction + slides.length) % slides.length;
        showSlide(slides[nextIndex].dataset.id);
    };

    const init = () => {
        elems.headerContainer.style.display = "block";
        elems.mainContainer.style.display = "block";
        elems.lightBoxContainer.style.display = "none";
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
    };

    const open = () => {
        const mediaCards = document.querySelectorAll(".mediaCard");
        mediaCards.forEach((media) => {
            media.addEventListener("click", (event) => {
                event.preventDefault();
                elems.headerContainer.style.display = "none";
                elems.mainContainer.style.display = "none";
                elems.lightBoxContainer.style.display = "block";
                const mediaId = media.dataset.id;
                showSlide(mediaId);
            });
        });
    };

    const navigateSlides = () => {
        elems.buttonNext.addEventListener("click", () => {
            const currentSlide = slides.find((slide) => slide.style.display === "block");
            if (!currentSlide) return;
            const currentIndex = slides.indexOf(currentSlide);
            navigateToIndex(currentIndex, 1);
        });

        elems.buttonPrev.addEventListener("click", () => {
            const currentSlide = slides.find((slide) => slide.style.display === "block");
            if (!currentSlide) return;
            const currentIndex = slides.indexOf(currentSlide);
            navigateToIndex(currentIndex, -1);
        });

        document.addEventListener("keydown", (event) => {
            const currentSlide = slides.find((slide) => slide.style.display === "block");
            if (!currentSlide) return;
            const currentIndex = slides.indexOf(currentSlide);

            if (event.key === "ArrowRight") {
                navigateToIndex(currentIndex, 1);
            } else if (event.key === "ArrowLeft") {
                navigateToIndex(currentIndex, -1);
            }
        });
    };

    const close = () => {
        elems.buttonClose.addEventListener("click", () => {
            init();
        });
    };

    await uploadMedia();
    init();
    open();
    navigateSlides();
    close();
};
