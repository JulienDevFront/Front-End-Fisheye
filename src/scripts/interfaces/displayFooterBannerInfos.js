import { getMediaDataProfile } from "../services/getMediaDataProfile.js";
import { getPhotographerProfile } from "../services/getPhotographerProfile.js";

export const displayFooterBannerInfos = async () => {
    const elems = {
        likesContainer: document.querySelector("#footerBannerInfos__ctn-likes__number"),
        priceContainer: document.querySelector("#footerBannerInfos__ctn-price__price"),
    };

    const displayNumberLikes = async () => {
        const media = await getMediaDataProfile();
        let count = [];
        media.forEach((elem) => count.push(elem.likes));
        const counter = count.reduce((acc, currentValue) => acc + currentValue);
        console.log(counter);
        return (elems.likesContainer.textContent = counter);
    };

    const displayPrice = async () => {
        const profileData = await getPhotographerProfile();
        const priceData = profileData.price;
        console.log(profileData, priceData);
        return (elems.priceContainer.textContent = priceData);
    };

    displayNumberLikes();
    displayPrice();
};
