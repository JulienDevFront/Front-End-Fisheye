/** JS.DOC =>
 * - - -
 * @module focusTrap @type {Arrow function}
 * - - -
 * @description handles the focus trap for
 * element  navigation with the data-focus
 * attribute for the keyboard tab key
 */
export const focusTrap = (container, datafocus, indexFocus) => {
    const elems = container.querySelectorAll(`[data-focus="${datafocus}"]`);
    const firstElem = elems[0];
    const lastElem = elems[elems.length - 1];
    const firstFocus = elems[indexFocus];
    firstFocus.focus();

    elems.forEach((elem) => {
        elem.addEventListener("keydown", (event) => {
            if (event.key !== "Tab") return;
            if (document.activeElement === lastElem && !event.shiftKey) event.preventDefault(), firstElem.focus();
            if (document.activeElement === firstElem && event.shiftKey) event.preventDefault(), lastElem.focus();
        });
    });
};
