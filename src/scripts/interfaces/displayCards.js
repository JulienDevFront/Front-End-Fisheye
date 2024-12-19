/** JS.DOC
 * - - -
 * @function displayCards
 * @description
 * - - -
 * @param {*} container
 * @param {*} profiles
 * @param {*} model
 * @returns {HTMLElements}
 */
export const DisplayCards = (container, profiles, model) => {
    const containerCards = document.querySelector(`${container}`);
    profiles.forEach((profile) => {
        const card = model.profileCard(profile);
        containerCards.appendChild(card);
    });
    return containerCards;
};
