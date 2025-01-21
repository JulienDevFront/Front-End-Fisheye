import { Media } from "./media.js";

export class VideoMedia extends Media {
    constructor({ video, ...data }) {
        super(data);
        this.video = video;
    }

    getCard() {
        const container = document.createElement("article");
        container.setAttribute("class", "mediaCard");
        const content = `
            <header class="mediaCard__header">
                <a class="mediaCard__header__link" href="${this.id}">
                    <video class="mediaCard__header__link__media--video" src="./assets/videos/${this.video}"></video>
                </a>
            </header>
            <footer class="mediaCard__footer">
                <h3 class="mediaCard__footer__title">${this.title}<h3/>
                <div class="mediaCard__footer__likes">
                    <p class="mediaCard__footer__likes__number">${this.likes}</p>
                    <img class="mediaCard__footer__likes__icon" src="./assets/icons/likes.png" alt="#">
                </div>
            </footer>
            `;
        container.innerHTML = content;
        return container;
    }
}
