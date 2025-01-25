import { getMediaDataProfile } from "../services/getMediaDataProfile.js";
import { FactoryMedia } from "../models/factoryMedia.js";

export const displayMedia = async () => {
    const mediaData = await getMediaDataProfile();
    mediaData.forEach((data) => {
        const mediaInstance = new FactoryMedia(data);
        const mediaCard = mediaInstance.getCard();
        document.querySelector(".media").appendChild(mediaCard);
    });
};
