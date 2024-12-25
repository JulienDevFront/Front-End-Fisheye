/** JS.DOC
 * - - -
 * @function displayCards
 * @description
 * - - -
 * @param {*} container
 * @param {*} profiles
 * @returns {HTMLElements}
 */
export const displayCards = (container, profiles) => {
    const containerCards = document.querySelector(`${container}`);
    profiles.forEach((profile) => {
        const card = profile.profileCard();
        containerCards.appendChild(card);
    });
    return containerCards;
};
