import { factoryMedia } from "../models/factoryMedia.js";

export const updateMedia = (data) => {
    const container = document.querySelector(".media");
    container.innerHTML = "";
    data.forEach((data) => {
        const mediaInstance = new factoryMedia(data);
        const mediaCard = mediaInstance.getCard();
        document.querySelector(".media").appendChild(mediaCard);
    });
};
