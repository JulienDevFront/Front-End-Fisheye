import { DataManager } from "../services/dataManager.js";
/** JS.DOC =>
 * - - -
 * @module displayFooterBanner @type {Arrow function}
 * - - -
 * @description Show the "showFooterBanner" HTML element.
 * The element return  an banner bottom with the total of
 * likes media of photograher and are price day.
 */
export const displayFooterBanner = async () => {
    const likesContainer = document.querySelector("#footerBannerInfos__ctn-likes__number");
    const priceContainer = document.querySelector("#footerBannerInfos__ctn-price__price");

    likesContainer.textContent = await DataManager.getCountLikesProfile();
    priceContainer.textContent = await DataManager.getPriceProfile();
};
