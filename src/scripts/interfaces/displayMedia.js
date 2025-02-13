import { DataManager } from "./../services/dataManager.js";
import { MediaAdapter } from "./../services/mediaAdapter.js";
import { displayLightbox } from "./displayLightbox.js";
import { focusTrap } from "./../helper/focusTrap.js";
/** JS.DOC =>
 * - - -
 * @module displayMedia @type {ArrowFunction}
 * - - -
 * @description This feature manages the display and sorting of a photographer's
 *  media. It  retrieves media data via the  "DataManager" service, adapts their
 * format with "MediaAdapter", and initializes the lightbox display.
 */
export const displayMedia = async () => {
    const data = await DataManager.getProfileMediaData();
    const media = new MediaAdapter(data);
    media.showMedia();
    media.showSlide();

    const label = document.querySelector(".mediaOption__label");
    const container = document.querySelector(".mediaOption__select");
    const buttons = document.querySelectorAll(".mediaOption__select__option");

    let selectedOption = "popularity";

    const updateDropdown = () => {
        buttons.forEach((btn) => {
            btn.style.display = btn.dataset.sortName === selectedOption ? "block" : "none";
        });
    };

    const toggleDropdown = (show) => {
        buttons.forEach((btn) => {
            btn.style.display = show ? "block" : btn.dataset.sortName === selectedOption ? "block" : "none";
        });
    };

    container.addEventListener("focus", () => {
        buttons.forEach((elem) => {
            elem.style.display = "block";
        });
    });

    label.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDropdown(true);
        focusTrap(container, "dropdown");
    });

    document.addEventListener("click", (event) => {
        if (!container.contains(event.target) && !label.contains(event.target)) {
            toggleDropdown(false);
        }
    });

    buttons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            selectedOption = event.target.dataset.sortName;
            media.sortMedia(selectedOption);
            media.showMedia();
            media.showSlide();
            updateDropdown();
            toggleDropdown(false);
            displayLightbox();
        });
    });

    updateDropdown();
};
