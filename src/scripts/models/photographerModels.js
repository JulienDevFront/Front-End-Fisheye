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

    static profileCard(profile) {
        const container = document.createElement("article");
        const content = `
            <img src="./assets/images/pictures/${profile.portrait}" alt="Portrait de ${profile.name}" />
            <h2>${profile.name}</h2>
            <p><span>${profile.city}</span>, <span>${profile.country}</span></p>
            <p>${profile.tagline}</p>
            <p>${profile.price}€/jour</p>
        `;
        container.innerHTML = content;
        return container;
    }

    static displayCards(container, profiles) {
        const containerCards = document.querySelector(`${container}`);
        profiles.forEach((profile) => {
            const card = PhotographerModels.profileCard(profile);
            containerCards.appendChild(card);
        });
        return containerCards;
    }
}
