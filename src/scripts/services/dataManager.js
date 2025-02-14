import { SingletonData } from "./singletonData.js";
/** JS.DOC =>
 * - - -
 * @module DataManager @type {class}
 * - - -
 * @description A static utility class for managing photographer data and media. This class
 * provides methods to  retrieve a photographer's profile, filter associated media based on
 * the current URL parameters, and sort media based on different criteria.
 * - - -
 * @static @method searchProfile()
 * @static @method searchProfileMedia()
 * @static @method getCountLikesProfile()
 * @static @method updateLikesProfile()
 * @static @method getPriceProfile()
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

    static async getCountLikesProfile(likes) {
        let totalLikes = 0;
        const media = await DataManager.getProfileMediaData();
        media.forEach((elem) => {
            totalLikes += elem.likes;
        });
        if (likes) return totalLikes + likes;
        else return totalLikes;
    }

    static async updateLikesProfile(container, btn, likes) {
        const btnLikes = container.querySelector(`.${btn}`);
        const valueLikes = container.querySelector(`.${likes}`);
        const totalDisplay = document.querySelector("#footerBannerInfos__ctn-likes__number");

        let value = Number(valueLikes.textContent);
        btnLikes.removeEventListener("click", btnLikes.clickHandler);

        btnLikes.clickHandler = async (event) => {
            event.stopPropagation();
            value += 1;
            valueLikes.textContent = value;
            totalDisplay.textContent = Number(totalDisplay.textContent) + 1;
            // console.log("new value :", value);
            // console.log("new total :", totalDisplay.textContent);
        };

        btnLikes.addEventListener("click", btnLikes.clickHandler);
    }

    static async getPriceProfile() {
        const profile = await DataManager.getProfileData();
        const price = profile.price;
        return price;
    }
}
