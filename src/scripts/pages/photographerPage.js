import { SingletonData } from "./../services/singletonData.js";
import { displayProfileBanner } from "./../interfaces/displayProfileBanner.js";
import { displayContactModal } from "./../interfaces/displayContactModal.js";
import { displayMedia } from "./../interfaces/displayMedia.js";
import { displayFooterBanner } from "./../interfaces/displayFooterBanner.js";
import { displayLightbox } from "../interfaces/displayLightbox.js";
/** JS.DOC =>
 * - - -
 * @module photographerPage @type {ArrowFunction}
 * - - -
 * @description import the elements for
 * show the different components of the
 * page photographer
 */
const photographerPage = async () => {
    try {
        await SingletonData.loadData("./../../api/photographers.json");
        await displayProfileBanner();
        await displayContactModal();
        await displayFooterBanner();
        await displayMedia();
        await displayLightbox();
    } catch (err) {
        console.log(err);
    }
};
photographerPage();
