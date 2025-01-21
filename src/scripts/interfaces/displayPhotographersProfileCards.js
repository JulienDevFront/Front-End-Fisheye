/** JS.DOC
 * - - -
 * @function displayPhotographersProfileCards
 * @description
 * - - -
 * @param {*} container
 * @param {*} profiles
 * @returns {HTMLElements}
 */
export const displayPhotographersProfileCards = (container, profiles) => {
    const containerCards = document.querySelector(`${container}`);
    profiles.forEach((profile) => {
        const card = profile.profileCard();
        containerCards.appendChild(card);
    });
    return containerCards;
};
