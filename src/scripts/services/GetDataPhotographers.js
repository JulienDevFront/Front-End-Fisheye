/** JS.DOC
 * - - -
 * @module GetDataPhotographers @type {function}
 * @description Get data from the API from the path specified
 * as a parameter and  returns a Array  about  photographers.
 * - - -
 * @param {path} @type {String}
 * @returns {promise} @type {Array}
 */
export async function GetDataPhotographers(path) {
    try {
        const promise = await fetch(`${path}`);
        const reponse = await promise.json();
        const keyData = "photographers";
        return reponse[keyData];
    } catch (err) {
        return console.error(err);
    }
}
