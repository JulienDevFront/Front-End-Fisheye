import { GetData } from "../data/GetData.js";
import { PhotographerTemplate } from "../templates/PhotographerTemplate.js";

async function init() {
    try {
        const photographers = await GetData("../../data/photographers.json", "photographers");
        const photographerTemplate = new PhotographerTemplate();
        console.log("Data preview :", photographers);
        console.log("Template preview :", photographerTemplate);
        return photographerTemplate.displayCards(".photographer_section", photographers);
    } catch (error) {
        return console.error("Erreur lors de l'initialisation:", error);
    }
}

init();
