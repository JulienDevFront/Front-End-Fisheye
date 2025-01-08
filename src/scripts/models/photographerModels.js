/** JS.DOC
 * - - -
 * @class PhotographerTemplate
 * @description Represents for photographers design pattern with
 * data and  a method  to generate  their card HTML  of  profil.
 * - - -
 * @constructor
 * @params
 * @key {number} id
 * @key {string} name
 * @key {string} city
 * @key {string} country
 * @key {string} tagline
 * @key {number} price
 * @key {string} portrait
 * - - -
 * @method profileCard()
 * @return {HTMLElement}
 * - - -
 * @method displayCards()
 * @param {container, profiles}
 * @return {HTMLElements}
 */
export class PhotographerModels {
    constructor({ name, id, city, country, tagline, price, portrait }) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }

    profileCard() {
        const container = document.createElement("article");
        container.setAttribute("class", "photographerProfileCard");
        container.setAttribute("aria-labelledby", `photographer-${this.id}`);
        const content = `
            <header class="photographerProfileCard__header" role="banner" aria-label="Banner du photographe ${this.name}">
                <a href="./photographer.html?id=${this.id}" class="photographerProfileCard__header__link" aria-label="Voir le profil de ${this.name}">
                    <img src="./assets/pictures/${this.portrait}" class="photographerProfileCard__header__link__img" alt="Portrait de ${this.name}"/>
                    <h2 id="photographer-${this.id}" class="photographerProfileCard__header__link__title">${this.name}</h2>
                </a>
            </header>
            <footer class="photographerProfileCard__footer" role="contentinfo">
                <p class="photographerProfileCard__footer__localize"><span>${this.city}</span>, <span>${this.country}</span></p>
                <p class="photographerProfileCard__footer__tagline">${this.tagline}</p>
                <p class="photographerProfileCard__footer__price">${this.price}€/jour</p>
            </footer>
        `;
        container.innerHTML = content;
        return container;
    }

    photogapherProfileBanner() {
        const container = document.querySelector(".photogapherProfileBanner");
        container.setAttribute("aria-label", `Informations de ${this.name}`);
        const content = `
            <div class="photogapherProfileBanner__ctn-txt">
                <h1 class="photogapherProfileBanner__ctn-txt__title">${this.name}</h1>
                <p class="photogapherProfileBanner__ctn-txt__localize"><span>${this.city}</span>, <span>${this.country}</span></p>
                <p class="photogapherProfileBanner__ctn-txt__tagline">${this.tagline}</p>
            </div>
            <div class="photogapherProfileBanner__ctn-btn">
                <button class="button--openModal">Contactez-moi</button>
            </div>
            <div class="photogapherProfileBanner__ctn-img">
                <img class="photogapherProfileBanner__ctn-img__img" src="./assets/pictures/${this.portrait}" alt="Portrait de ${this.name}"/>
            </div>
        `;
        container.innerHTML = content;
        return container;
    }

    contactForm() {
        const container = document.querySelector("#PhotographerContactForm");
        container.setAttribute("aria-label", `Contactez ${this.name}`);

        const content = `
        <header class="PhotographerContactForm__header">
                <h2 class="PhotographerContactForm__header__title">
                    <span class="PhotographerContactForm__header__title__txt">Contactez-moi</span>
                    <span class="PhotographerContactForm__header__title__txt">${this.name}</span>
                </h2>
                <button class="button--closeModal"></button>
            </header>
            <form class="PhotographerContactForm__form">
                <fieldset class="PhotographerContactForm__form__fieldset">
                    <label class="label-txt" for="name">Prénom</label>
                    <input class="input-txt" type="text" name="name" placeholder="Julie, Jean .." />
                </fieldset>
                <fieldset class="PhotographerContactForm__form__fieldset">
                    <label class="label-txt" for="lastName">Nom</label>
                    <input class="input-txt" type="text" name="lastName" placeholder="Garnier, Dubois .." />
                </fieldset>
                <fieldset class="PhotographerContactForm__form__fieldset">
                    <label class="label-txt" for="email">Email</label>
                    <input class="input-txt" type="email" name="email" placeholder="mon.adresse@gmail.com" />
                </fieldset>
                <fieldset class="PhotographerContactForm__form__fieldset">
                    <label class="label-txt" for="message">Votre message</label>
                    <textarea class="input-textarea" type="text-area" name="message" placeholder="Saisissez votre message .."></textarea>
                </fieldset>
                <fieldset class="PhotographerContactForm__form__fieldset">
                    <input class="button--submitModal" type="submit" />
                </fieldset>
            </form>
            `;

        container.innerHTML = content;
        return container;
    }
}
