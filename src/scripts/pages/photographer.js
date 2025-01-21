import { displayBannerPhotographer } from "../interfaces/displayBannerPhotographer.js";
import { displayContactForm } from "../interfaces/displayContactForm.js";
import { displayMedia } from "../interfaces/displayMedia.js";
import { displayMediaSort } from "../interfaces/displayMediaSort.js";
import { displayDropDownOption } from "../interfaces/displayDropDownOption.js";

async function App() {
    await displayBannerPhotographer();
    await displayContactForm();
    await displayMedia();
    await displayMediaSort();
    await displayDropDownOption();
}

App();
