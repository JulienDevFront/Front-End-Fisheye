const elems = {
    modal: () => document.querySelector("#PhotographerContactForm"),
    buttonOpen: () => document.querySelector(".button--openModal"),
    buttonClose: () => document.querySelector(".button--closeModal"),
    buttonSubmit: () => document.querySelector(".button--submitModal"),
};

export const displayModalPhotographerContact = () => {
    elems.modal().style.display = "none";

    elems.buttonOpen().addEventListener("click", () => {
        elems.modal().style.display = "block";
    });

    elems.buttonClose().addEventListener("click", () => {
        elems.modal().style.display = "none";
    });

    elems.buttonSubmit().addEventListener("click", (e) => {
        e.preventDefault();
        elems.modal().style.display = "none";
    });
};
