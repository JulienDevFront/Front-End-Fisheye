import { GetDataPhotographers } from "../services/GetDataPhotographers.js";
import { PhotographerModels } from "../models/photographerModels.js";

async function displayPhotographers() {
    try {
        const photographers = await GetDataPhotographers("../../api/photographers.json");
        console.log("Data preview :", photographers);
        if (!Array.isArray(photographers) || photographers.length === 0) {
            return console.error("Aucun photographe trouvé dans les données.");
        }
        PhotographerModels.displayCards(".photographer_section", photographers);
    } catch (error) {
        console.error("Erreur lors de l'initialisation:", error);
    }
}

displayPhotographers();
