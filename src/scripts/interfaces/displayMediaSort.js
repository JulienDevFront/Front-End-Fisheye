import { getMediaDataProfile } from "../services/getMediaDataProfile.js";
import { updateMedia } from "../updates/updateMedia.js";

const sortFunction = {
    popularity: (a, b) => b.likes - a.likes,
    date: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    title: (a, b) => a.title.localeCompare(b.title),
};

export const displayMediaSort = async () => {
    const selectElt = document.getElementById("sort");
    const mediaData = await getMediaDataProfile();

    for (const option of selectElt.children) {
        option.addEventListener("click", () => {
            const sortedMedia = [...mediaData].sort(sortFunction[option.dataset.sortName]);
            updateMedia(sortedMedia);
            console.log(`click button of ${option.dataset.sortName} option`);
        });
    }
};
