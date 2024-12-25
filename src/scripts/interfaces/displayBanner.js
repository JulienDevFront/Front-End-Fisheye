/** JS.DOC
 * - - -
 * @function displayBanner
 * @description
 * - - -
 * @param {*} container
 * @param {*} id
 * @param {*} model
 * @returns {HTMLElements}
 */
export const displayBanner = (container, model) => {
    const containerBanner = document.querySelector(`${container}`);
    const banner = model.profileBanner();
    containerBanner.appendChild(banner);

    return containerBanner;
};
