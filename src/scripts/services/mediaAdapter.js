import { FactoryMedia, FactoryLightbox } from "./../models/factoryMedia.js";
/** JS.DOC =>
 * - - -
 * @module MediaAdapter @type {class}
 * - - -
 * @description Manages the data received by the constructor to adapt
 * it to reset  the DOM and update the different interactions of this
 * data then display them again in the DOM.
 * - - -
 * @constructor @return {this._mediaData}
 * @method sortMedia(option)
 * @method showMedia()
 * @method showSlide()
 */
export class MediaAdapter {
    constructor(mediaData) {
        if (!Array.isArray(mediaData)) throw new Error("MediaAdapter is not an array");
        this._mediaData = mediaData;
    }

    sortMedia(option) {
        switch (option) {
            case "popularity":
                this._mediaData.sort((a, b) => b.likes - a.likes);
                break;
            case "date":
                this._mediaData.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "title":
                this._mediaData.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
    }

    async showMedia() {
        const container = document.querySelector(".media");
        container.innerHTML = "";
        this._mediaData.forEach((elem) => {
            const factoryInstance = new FactoryMedia(elem);
            container.append(factoryInstance);
        });
    }

    async showSlide() {
        const container = document.querySelector(".lightBox__ctn__ctn-slides");
        container.innerHTML = "";
        this._mediaData.forEach((elem) => {
            const factoryInstance = new FactoryLightbox(elem);
            container.append(factoryInstance);
        });
    }
}
