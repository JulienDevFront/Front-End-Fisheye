import { DataManager } from "../services/dataManager.js";
import { ConstructorPhotographer } from "../models/constructorPhotographer.js";
/** JS.DOC =>
 * - - -
 * @module displayProfileBanner @type {Arrow function}
 * - - -
 * @description Get ID in params URL and creat HTML banner with the
 * method "profileBanner" of  the  class "ConstructorPhotographer".
 */
export const displayProfileBanner = async () => {
    const profile = await DataManager.getProfileData();
    const createBanner = new ConstructorPhotographer(profile).profileBanner();
    return createBanner;
};
