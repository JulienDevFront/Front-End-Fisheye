import { getMediaDataProfile } from "../services/getMediaDataProfile.js";
import { factoryMedia } from "../models/factoryMedia.js";

export const displayMedia = async () => {
    const mediaData = await getMediaDataProfile();
    mediaData.forEach((data) => {
        const mediaInstance = new factoryMedia(data);
        const mediaCard = mediaInstance.getCard();
        document.querySelector(".media").appendChild(mediaCard);
    });
};
