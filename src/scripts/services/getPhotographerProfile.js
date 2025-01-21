/** JS.DOC
 *
 *
 */
import { getPhotographersData } from "./getPhotographersData.js";

export const getPhotographerProfile = async () => {
    const getParamsURL = new URLSearchParams(window.location.search);
    const getParamsID = parseInt(getParamsURL.get("id"));
    const photographersData = await getPhotographersData();
    const photographerData = photographersData.find((photographer) => photographer.id === getParamsID);
    console.log(`Get photographer profile data "${photographerData.name}" ⬇️\n`, photographerData);
    return photographerData;
};
