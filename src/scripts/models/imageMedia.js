import { Media } from "./media.js";

export class ImageMedia extends Media {
    constructor({ image, ...data }) {
        super(data);
        this.image = image;
    }

    getCard() {
        const container = document.createElement("article");
        container.setAttribute("class", "mediaCard");
        container.dataset.id = this.id;
        const content = `
        <header class="mediaCard__header">
            <a class="mediaCard__header__link" href="#" data-id="${this.id}">
                <img class="mediaCard__header__link__media--img" src="./assets/pictures/${this.image}" alt="Image de ${this.name}">
            </a>
        </header>
        <footer class="mediaCard__footer">
            <h3 class="mediaCard__footer__title">${this.title}<h3/>
            <div class="mediaCard__footer__likes">
                <p class="mediaCard__footer__likes__number">${this.likes}</p>
                <img class="mediaCard__footer__likes__icon" src="./assets/icons/likes.svg" alt="Icon like">
            </div>
        </footer>
        `;
        container.innerHTML = content;
        return container;
    }

    carrouselCard() {
        const container = document.createElement("li");
        container.setAttribute("class", "lightBox__ctn__ctn-slides__slide");
        container.dataset.id = this.id;
        container.dataset.target = "false";
        const content = `
            <img class="lightBox__ctn__ctn-slides__slide__media" src="./assets/pictures/${this.image}" alt="Image de ${this.name}"/>
            <h3 class="lightBox__ctn__ctn-slides__slide__title">${this.title}</h3>
        `;
        container.innerHTML = content;
        return container;
    }
}
