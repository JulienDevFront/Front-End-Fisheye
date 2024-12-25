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
        container.setAttribute("class", "profileCard");
        container.setAttribute("aria-labelledby", `photographer-${this.id}`);
        const content = `
            <header class="profileCard__header" role="banner" aria-label="Banner du photographe ${this.name}">
                <a href="./photographer.html?id=${this.id}" class="profileCard__header__link" aria-label="Voir le profil de ${this.name}">
                    <img src="./assets/images/pictures/${this.portrait}" class="profileCard__header__link__img" alt="Portrait de ${this.name}"/>
                    <h2 id="photographer-${this.id}" class="profileCard__header__link__title">${this.name}</h2>
                </a>
            </header>
            <footer class="profileCard__footer" role="contentinfo">
                <p class="profileCard__footer__localize"><span>${this.city}</span>, <span>${this.country}</span></p>
                <p class="profileCard__footer__tagline">${this.tagline}</p>
                <p class="profileCard__footer__price">${this.price}€/jour</p>
            </footer>
        `;
        container.innerHTML = content;
        return container;
    }

    profileBanner() {
        const container = document.createElement("section");
        container.setAttribute("class", "section-profileBanner");
        container.setAttribute("role", "contentinfo");
        container.setAttribute("aria-label", `Informations de ${this.name}`);
        const content = `
            <div>
                <h1>${this.name}</h1>
                <p class=""><span>${this.city}</span>, <span>${this.country}</span></p>
                <p>${this.tagline}</p>
            </div>
            <div>
                <button>Contactez-moi</button>
            </div>
            <div>
                <img src="./assets/images/pictures/${this.portrait}" class="" alt="Portrait de ${this.name}"/>
            </div>
        `;
        container.innerHTML = content;
        return container;
    }
}
