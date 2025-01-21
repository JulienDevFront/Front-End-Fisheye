/** JS.DOC
 *
 *
 */
import { getData } from "./getData.js";

export const getPhotographersData = async () => {
    const data = await getData("../../api/photographers.json", "photographers");
    // console.log('Look the get datas in API "photographer.json" with of the KEYS "photographers" ⬇️\n', data);
    return data;
};
