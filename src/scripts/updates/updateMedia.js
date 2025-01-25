import { FactoryMedia } from "../models/factoryMedia.js";

export const updateMedia = (data) => {
    const container = document.querySelector(".media");
    container.innerHTML = "";
    data.forEach((data) => {
        const mediaInstance = new FactoryMedia(data);
        const mediaCard = mediaInstance.getCard();
        document.querySelector(".media").appendChild(mediaCard);
    });
};
