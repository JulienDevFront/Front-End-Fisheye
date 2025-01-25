import { Media } from "./media.js";

export class VideoMedia extends Media {
    constructor({ video, ...data }) {
        super(data);
        this.video = video;
    }

    getCard() {
        const container = document.createElement("article");
        container.setAttribute("class", "mediaCard");
        container.dataset.id = this.id;
        const content = `
            <header class="mediaCard__header">
                <a class="mediaCard__header__link" href="#" data-id="${this.id}">
                    <video class="mediaCard__header__link__media--video" src="./assets/videos/${this.video}"></video>
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
            <video controls class="lightBox__ctn__ctn-slides__slide__media">
                <source src="./assets/videos/${this.video}" type="video/mp4"/>
            </video>
            <h3 class="lightBox__ctn__ctn-slides__slide__title">${this.title}</h3>
        `;

        container.innerHTML = content;
        return container;
    }
}
