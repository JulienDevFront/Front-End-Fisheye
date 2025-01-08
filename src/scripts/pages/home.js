import { getData } from "../services/getData.js";
import { PhotographerModels } from "../models/photographerModels.js";
import { displayPhotographersProfileCards } from "../interfaces/displayPhotographersProfileCards.js.js";
/** JS.DOC
 *
 */
async function displayPhotographers() {
    try {
        const photographersData = await getData("../../api/photographers.json", "photographers");
        console.log("Data preview :", photographersData);
        const photographers = photographersData.map((data) => new PhotographerModels(data));
        console.log("model preview :", photographers);
        if (!Array.isArray(photographers) || photographers.length === 0) {
            return console.error("Aucun photographe trouvé dans les données.");
        }
        displayPhotographersProfileCards(".mainPhotographerProfiles", photographers);
    } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
    }
}

displayPhotographers();
