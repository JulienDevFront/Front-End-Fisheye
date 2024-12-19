/** JS.DOC
 * - - -
 * @class PhotographerTemplate
 * @description Represents for photographers design pattern with
 * data and  a method  to generate  their card HTML  of  profil.
 * - - -
 * @constructor
 * @property {number} id
 * @property {string} name
 * @property {string} city
 * @property {string} country
 * @property {string} tagline
 * @property {number} price
 * @property {string} portrait
 * - - -
 * @method profileCard()
 * @return {HTMLElement}
 * - - -
 * @method displayCards()
 * @param {container, profiles}
 * @return {HTMLElements}
 */
export class PhotographerModels {
    constructor(name, id, city, country, tagline, price, portrait) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }

    profileCard(profile) {
        const container = document.createElement("article");
        container.setAttribute("class", "profileCard");
        container.setAttribute("aria-labelledby", `photographer-${profile.id}`);
        const content = `
            <header class="profileCard__header" role="banner" aria-label="Banner du photographe ${profile.name}">
                <a href="#" class="profileCard__header__link" aria-label="Voir le profil de ${profile.name}">
                    <img src="./assets/images/pictures/${profile.portrait}" class="profileCard__header__link__img" alt="Portrait de ${profile.name}"/>
                    <h2 id="photographer-${profile.id}" class="profileCard__header__link__title">${profile.name}</h2>
                </a>
            </header>
            <footer class="profileCard__footer" role="contentinfo">
                <p class="profileCard__footer__localize"><span>${profile.city}</span>, <span>${profile.country}</span></p>
                <p class="profileCard__footer__tagline">${profile.tagline}</p>
                <p class="profileCard__footer__price">${profile.price}€/jour</p>
            </footer>
        `;
        container.innerHTML = content;
        return container;
    }
}
