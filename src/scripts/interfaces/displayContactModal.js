import { DataManager } from "./../services/dataManager.js";
import { focusTrap } from "./../helper/focusTrap.js";
/** JS.DOC =>
 * - - -
 * @module displayContactModal @type {Arrow function}
 * - - -
 * @description manages  the  display of HTML element
 * "contact modal" of photographer with of the events
 * at clickeds.
 */
export const displayContactModal = async () => {
    const modal = document.querySelector("#PhotographerContactForm");
    const buttonOpen = document.querySelector(".button--openModal");
    const buttonClose = document.querySelector(".button--closeModal");
    const buttonSubmit = document.querySelector(".button--submitModal");
    const nameContainer = document.querySelector("#nameProfilePhotographer");
    const inputs = document.querySelectorAll(`input[type="text"], input[type="email"], textarea[type="text-area"]`);

    if (buttonOpen && buttonClose && buttonSubmit && modal && nameContainer) {
        // Open modal
        buttonOpen.addEventListener("click", async () => {
            modal.style.display = "block";
            focusTrap(modal, "contactForm", 1);

            const profile = await DataManager.getProfileData();
            nameContainer.innerText = profile.name;
        });
        // close modal
        buttonClose.addEventListener("click", () => {
            modal.style.display = "none";
        });
        // close modal
        buttonSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            inputs.forEach((elem) => {
                console.log(`Value of input of element ${elem.type} : ${elem.value}`);
                elem.value = "";
            });

            modal.style.display = "none";
        });
    } else {
        console.error("The elements of modal his not found in the DOM");
    }
};
