/** JS.DOC
 * - - -
 * @module getMediaData @type {function}
 * @description Get data from the API from the path specified
 * as a parameter and  returns a Array  about  photographers.
 * - - -
 * @param {path} @type {String}
 * @returns {promise} @type {Array}
 */
export async function getMediaData() {
    try {
        const promise = await fetch("../../api/photographers.json");
        const reponse = await promise.json();
        // console.log('Look the get datas in API "photographer.json" with of the KEYS "media" ⬇️\n', reponse["media"]);
        return reponse["media"];
    } catch (err) {
        return console.error(err);
    }
}
