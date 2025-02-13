import { focusTrap } from "../helper/focusTrap.js";
/** JS.DOC =>
 * - - -
 * @module displayLightbox @type {Arrowfunction}
 * - - -
 * @description The element "lightbox"
 * it an  modal who show the slides in
 * an carrousel.
 * - - -
 * @method open()
 * @method close()
 * @method prevSlide()
 * @method nextSlide()
 * @method prevSlideCLick()
 * @method nextSlideCLick()
 * @method keyboardNavigation()
 */
export const displayLightbox = async () => {
    const HtmlElem_media = document.querySelector(".media");
    const HtmlElem_lightBox = document.querySelector("#lightBox");
    const HtmlElem_btnPrev = document.querySelector(".button--prevLightBox");
    const HtmlElem_btnNext = document.querySelector(".button--nextLightBox");
    const HtmlElem_btnClose = document.querySelector(".button--closeLightBox");
    const HtmlElem_slides = document.querySelectorAll(".lightBox__ctn__ctn-slides__slide");

    const open = () => {
        HtmlElem_media.addEventListener("click", (event) => {
            const cardSelected = event.target.closest(".mediaCard");
            const cardID = cardSelected.dataset.id;
            if (!cardID) throw new Error("The 'cardMedia' HTML element has no ID attribute!");
            const slide = document.querySelector(`.lightBox__ctn__ctn-slides__slide[data-id="${cardID}"]`);

            HtmlElem_slides.forEach((elem) => {
                elem.style.display = "none";
                elem.dataset.target = "false";
            });

            if (slide) {
                slide.dataset.target = "true";
                slide.style.display = "block";
            }

            HtmlElem_lightBox.style.display = "block";
            focusTrap(HtmlElem_lightBox, "lightbox");
        });
    };

    const close = () => {
        HtmlElem_btnClose.addEventListener("click", () => {
            HtmlElem_lightBox.style.display = "none";
        });
    };

    const prevSlide = () => {
        let currentIndex = [...HtmlElem_slides].findIndex((slide) => slide.dataset.target === "true");
        if (currentIndex === -1) return;
        let prevIndex = (currentIndex - 1 + HtmlElem_slides.length) % HtmlElem_slides.length;
        HtmlElem_slides[currentIndex].style.display = "none";
        HtmlElem_slides[currentIndex].dataset.target = "false";
        HtmlElem_slides[prevIndex].style.display = "block";
        HtmlElem_slides[prevIndex].dataset.target = "true";
    };

    const nextSlide = () => {
        let currentIndex = [...HtmlElem_slides].findIndex((slide) => slide.dataset.target === "true");
        if (currentIndex === -1) return;
        let nextIndex = (currentIndex + 1) % HtmlElem_slides.length;
        HtmlElem_slides[currentIndex].style.display = "none";
        HtmlElem_slides[currentIndex].dataset.target = "false";
        HtmlElem_slides[nextIndex].style.display = "block";
        HtmlElem_slides[nextIndex].dataset.target = "true";
    };

    const prevSlideClick = () => {
        HtmlElem_btnPrev.addEventListener("click", prevSlide);
    };

    const nextSlideClick = () => {
        HtmlElem_btnNext.addEventListener("click", nextSlide);
    };

    const keyboardNavigation = () => {
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") prevSlide();
            if (event.key === "ArrowRight") nextSlide();
            if (event.key === "Escape") HtmlElem_lightBox.style.display = "none";
        });
    };

    open();
    prevSlideClick();
    nextSlideClick();
    keyboardNavigation();
    close();
};
