import { SingletonData } from "./singletonData.js";
/** JS.DOC =>
 * - - -
 * @module DataManager @type {class}
 * - - -
 * @description A static utility class for managing photographer data and media. This class
 * provides methods to  retrieve a photographer's profile, filter associated media based on
 * the current URL parameters, and sort media based on different criteria.
 * - - -
 * @static @method searchProfile() Get photographer data based on URL parameters.
 * @static @method searchProfileMedia() Filter media based on photographer's ID from the URL.
 * @static @method getCountLikesProfile() Count the number total of likes of photographe.
 * @static @method getPriceProfile() Get the price day of the photographer.
 */
export class DataManager {
    constructor() {}

    static async getProfileData() {
        const getParamsURL = new URLSearchParams(window.location.search);
        const getParamsID = parseInt(getParamsURL.get("id"));
        const photographers = await SingletonData.getPhotographers();
        const findPhotographer = photographers.find((photographer) => photographer.id === getParamsID);
        // console.log(`Get id URL of photographer "${findPhotographer.name}"`, findPhotographer);
        return findPhotographer;
    }

    static async getProfileMediaData() {
        const profileData = await DataManager.getProfileData();
        const mediaData = SingletonData.getMedia();
        const filterMedia = mediaData.filter((media) => media.photographerId === profileData.id);
        // console.log(`Filtered media data for profile "${profileData.name}"`, filterMedia);
        return filterMedia;
    }

    static async getCountLikesProfile() {
        let count = [];
        const media = await DataManager.getProfileMediaData();
        media.forEach((elem) => count.push(elem.likes));
        const counter = count.reduce((acc, currentValue) => acc + currentValue);
        return counter;
    }

    static async getPriceProfile() {
        const profile = await DataManager.getProfileData();
        const price = profile.price;
        return price;
    }
}
