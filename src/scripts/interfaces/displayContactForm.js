import { getPhotographerProfile } from "../services/getPhotographerProfile.js";

export const displayContactForm = () => {
    const elems = {
        modal: document.querySelector("#PhotographerContactForm"),
        buttonOpen: document.querySelector(".button--openModal"),
        buttonClose: document.querySelector(".button--closeModal"),
        buttonSubmit: document.querySelector(".button--submitModal"),
        nameContainer: document.querySelector("#nameProfilePhotographer"),
    };

    elems.modal.style.display = "none";

    elems.buttonOpen.addEventListener("click", async () => {
        elems.modal.style.display = "block";
        const profile = await getPhotographerProfile();
        elems.nameContainer.innerText = profile.name;
    });

    elems.buttonClose.addEventListener("click", () => {
        elems.modal.style.display = "none";
    });

    elems.buttonSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        elems.modal.style.display = "none";
    });
};
