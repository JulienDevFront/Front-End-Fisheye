import { DataManager } from "../services/dataManager.js";
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

    if (buttonOpen && buttonClose && buttonSubmit && modal && nameContainer) {
        // Open modal
        buttonOpen.addEventListener("click", async () => {
            modal.style.display = "block";
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
            modal.style.display = "none";
        });
    } else {
        console.error("The elements of modal his not found in the DOM");
    }
};
