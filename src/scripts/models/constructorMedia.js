/** JS.DOC =>
 * - - -
 * @module ConstructorMedia @type {class}
 * - - -
 * @description This class represents “image or video” media belonging to
 * a photographer. It dynamically  generates the HTML  elements necessary
 * to display media in the form of cards and slides for the lightbox.
 */
export class ConstructorMedia {
    constructor({ id, photographerId, title, image, video, likes, date, price }) {
        this._id = id;
        this._photographerId = photographerId;
        this._title = title;
        this._likes = likes;
        this._date = date;
        this._price = price;

        if (image) this._image = image;
        if (video) this._video = video;

        ConstructorMedia.instance = this;
    }

    get imageCard() {
        const container = document.createElement("article");
        container.setAttribute("class", "mediaCard");
        container.dataset.id = this._id;
        const content = `
            <header class="mediaCard__header">
                <a class="mediaCard__header__link" href="#" data-id="${this._id}">
                    <img class="mediaCard__header__link__media--img" src="./src/assets/pictures/${this._image}" alt="${this._title} image.">
                </a>
            </header>
            <footer class="mediaCard__footer">
                <h3 class="mediaCard__footer__title">${this._title}<h3/>
                <div class="mediaCard__footer__likes">
                    <p class="mediaCard__footer__likes__number">${this._likes}</p>
                    <img class="mediaCard__footer__likes__icon" src="./src/assets/icons/likes.svg" alt="Icon like">
                </div>
            </footer>
        `;
        container.innerHTML = content;
        return container;
    }

    get imageSlide() {
        const container = document.createElement("li");
        container.setAttribute("class", "lightBox__ctn__ctn-slides__slide");
        container.dataset.id = this._id;
        container.dataset.target = "false";
        const content = `
            <img class="lightBox__ctn__ctn-slides__slide__media" src="./src/assets/pictures/${this._image}" alt="${this._title} image."/>
            <h3 class="lightBox__ctn__ctn-slides__slide__title">${this._title}</h3>
        `;
        container.innerHTML = content;
        return container;
    }

    get videoCard() {
        const container = document.createElement("article");
        container.setAttribute("class", "mediaCard");
        container.dataset.id = this._id;
        const content = `
            <header class="mediaCard__header">
                <a class="mediaCard__header__link" href="#" data-id="${this._id}">
                    <video controls class="mediaCard__header__link__media--video">
                        <source src="./src/assets/videos/${this._video}" type="video/mp4"/>
                    </video>
                </a>
            </header>
            <footer class="mediaCard__footer">
                <h3 class="mediaCard__footer__title">${this._title}<h3/>
                <div class="mediaCard__footer__likes">
                    <p class="mediaCard__footer__likes__number">${this._likes}</p>
                    <img class="mediaCard__footer__likes__icon" src="./src/assets/icons/likes.svg" alt="Icon like">
                </div>
            </footer>
            `;
        container.innerHTML = content;
        return container;
    }

    get videoSlide() {
        const container = document.createElement("li");
        container.setAttribute("class", "lightBox__ctn__ctn-slides__slide");
        container.dataset.id = this._id;
        container.dataset.target = "false";
        const content = `
            <video controls class="lightBox__ctn__ctn-slides__slide__media">
                <source src="./src/assets/videos/${this._video}" type="video/mp4"/>
            </video>
            <h3 class="lightBox__ctn__ctn-slides__slide__title">${this._title}</h3>
        `;

        container.innerHTML = content;
        return container;
    }
}
