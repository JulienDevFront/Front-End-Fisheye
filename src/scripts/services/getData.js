/** JS.DOC
 * - - -
 * @module getData @type {function}
 * @description Get data from the API from the path specified
 * as a parameter and  returns a Array  about  photographers.
 * - - -
 * @param {path} @type {String}
 * @returns {promise} @type {Array}
 */
export async function getData(path, key) {
    try {
        const promise = await fetch(`${path}`);
        const reponse = await promise.json();
        return reponse[key];
    } catch (err) {
        return console.error(err);
    }
}
