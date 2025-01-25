import { displayBannerPhotographer } from "../interfaces/displayBannerPhotographer.js";
import { displayContactForm } from "../interfaces/displayContactForm.js";
import { displayMedia } from "../interfaces/displayMedia.js";
import { displayMediaSort } from "../interfaces/displayMediaSort.js";
import { displayDropDownOption } from "../interfaces/displayDropDownOption.js";
import { displayFooterBannerInfos } from "../interfaces/displayFooterBannerInfos.js";
import { displayLightBox } from "../interfaces/displayLightBox.js";

async function App() {
    try {
        await displayBannerPhotographer();
        displayContactForm();
        await displayMedia();
        await displayMediaSort();
        displayDropDownOption();
        displayFooterBannerInfos();
        displayLightBox();
    } catch (err) {
        console.log(err);
    }
}

App();
