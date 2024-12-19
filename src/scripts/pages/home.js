import { GetDataPhotographers } from "../services/getDataPhotographers.js";
import { PhotographerModels } from "../models/photographerModels.js";
import { DisplayCards } from "../interfaces/displayCards.js";
/** JS.DOC
 *
 */
async function displayPhotographers() {
    try {
        const photographers = await GetDataPhotographers("../../api/photographers.json");
        console.log("Data preview :", photographers);
        const model = new PhotographerModels();
        console.log("model preview :", model);
        if (!Array.isArray(photographers) || photographers.length === 0) {
            return console.error("Aucun photographe trouvé dans les données.");
        }
        DisplayCards(".photographer_section", photographers, model);
    } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
    }
}

displayPhotographers();
