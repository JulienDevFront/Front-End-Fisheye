/** JS.DOC
 * - - -
 * @function displayBannerPhotographer
 * @description
 * - - -
 * @param {*} container
 * @param {*} id
 * @param {*} model
 * @returns {HTMLElements}
 */
import { getPhotographerProfile } from "../services/getPhotographerProfile.js";
import { PhotographerModels } from "../models/photographerModels.js";

export const displayBannerPhotographer = async () => {
    const profileData = await getPhotographerProfile();
    const banner = new PhotographerModels(profileData).photogapherProfileBanner();
    return banner;
};
