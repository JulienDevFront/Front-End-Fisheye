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
export class PhotographerTemplate {
    constructor(name, id, city, country, tagline, price, portrait) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.portrait = `assets/photographers/${portrait}`;
    }

    profileCard() {
        const container = document.createElement("article");
        const content = `
            <img src="${this.portrait}" alt="Portrait de ${this.name}" />
            <h2>${this.name}</h2>
            <p><span>${this.city}</span>, <span>${this.country}</span></p>
            <p>${this.tagline}</p>
            <p>${this.price}€/jour</p>
        `;
        container.innerHTML = content;
        return container;
    }

    displayCards(container, profiles) {
        const containerCards = document.querySelector(`${container}`);
        profiles.forEach((profile) => {
            const template = new PhotographerTemplate(...Object.values(profile));
            const profileCard = template.profileCard();
            containerCards.appendChild(profileCard);
        });
    }
}
