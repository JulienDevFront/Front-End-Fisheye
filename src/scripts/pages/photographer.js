import { getData } from "../services/getData.js";
import { displayBanner } from "../interfaces/displayBanner.js";
import { PhotographerModels } from "../models/photographerModels.js";

async function displayProfileBanner() {
    const photographersData = await getData("../../api/photographers.json", "photographers");
    console.log(photographersData);

    const paramsUrl = new URLSearchParams(window.location.search);
    const paramsId = parseInt(paramsUrl.get("id"));
    console.log("ID du photographe :", paramsId);

    const photographerData = photographersData.find((photographerData) => photographerData.id === paramsId);
    console.log("data profile :", photographerData);

    const photographer = new PhotographerModels(photographerData);
    displayBanner(".header", photographer);
}
displayProfileBanner();
