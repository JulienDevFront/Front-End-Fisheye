import { ConstructorMedia } from "./constructorMedia.js";
/** JS.DOC =>
 * - - -
 * @module FactoryMedia @type {class}
 * @module FactoryLightbox @type {class}
 * - - -
 * @description
 * A factory class responsible for creating media elements "images or videos"
 * based on the  provided data. This class follows the Factory Design Pattern
 * to dynamically generate and return the appropriate media component.
 */
export class FactoryMedia {
    constructor(data) {
        const mediaInstance = new ConstructorMedia(data);

        if (data.image) {
            return mediaInstance.imageCard;
        } else if (data.video) {
            return mediaInstance.videoCard;
        } else {
            throw new Error("Factory media error: Invalid media type!");
        }
    }
}
export class FactoryLightbox {
    constructor(data) {
        const mediaInstance = new ConstructorMedia(data);

        if (data.image) {
            return mediaInstance.imageSlide;
        } else if (data.video) {
            return mediaInstance.videoSlide;
        } else {
            throw new Error("Factory media error: Invalid media type!");
        }
    }
}
