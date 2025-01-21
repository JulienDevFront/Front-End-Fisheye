import { getPhotographerProfile } from "./getPhotographerProfile.js";
import { getMediaData } from "./getMediaData.js";

export const getMediaDataProfile = async () => {
    const profileData = await getPhotographerProfile();
    const mediaData = await getMediaData();
    const filterProfileMediaData = mediaData.filter((media) => media.photographerId === profileData.id);
    console.log(`Filtered media data for profile "${profileData.name}" ⬇️\n`, filterProfileMediaData);
    return filterProfileMediaData;
};
