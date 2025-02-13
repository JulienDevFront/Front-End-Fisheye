import { SingletonData } from "./../services/singletonData.js";
import { ConstructorPhotographer } from "./../models/constructorPhotographer.js";
/** JS.DOC =>
 * - - -
 * @module homePage @type {Arrow function}
 * - - -
 * @description
 * creat  the  home page. Load the cards
 * for photographers and display in DOM.
 */
const homePage = async () => {
    try {
        // load datas and elements
        await SingletonData.loadData("./../../api/photographers.json");
        const photographers = await SingletonData.getPhotographers();
        const container = document.querySelector(".mainPhotographerProfiles");
        if (!container) throw new Error(`the container is not found`);
        // create cards
        const cards = photographers.map((photographer) => {
            const photogerInstance = new ConstructorPhotographer(photographer);
            return photogerInstance.profileCard();
        });
        // return cards in container
        return container.append(...cards);
    } catch (err) {
        console.error(err);
    }
};
homePage();
