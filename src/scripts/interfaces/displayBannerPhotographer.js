/** JS.DOC
 * - - -
 * @function displayBannerPhotographer
 * @description
 * - - -
 * @param {*} container
 * @param {*} id
 * @param {*} model
 * @returns {HTMLElements}
 */
export const displayBannerPhotographer = (container, model) => {
    const containerBanner = document.querySelector(`${container}`);
    const banner = model.photogapherProfileBanner();
    containerBanner.appendChild(banner);

    return containerBanner;
};
