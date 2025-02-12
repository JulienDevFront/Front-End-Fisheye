export const focusTrap = (container, datafocus) => {
    const elems = container.querySelectorAll(`[data-focus=${datafocus}`);

    const firstElem = elems[0];
    const lastElem = elems[elems.length - 1];
    firstElem.focus();

    const eventListener = (event) => {
        if (event.key !== "Tab") return;
        if (document.activeElement === lastElem && !event.shiftKey) event.preventDefault(), firstElem.focus();
        if (document.activeElement === firstElem && event.shiftKey) event.preventDefault(), lastElem.focus();
    };

    container.addEventListener("keydown", eventListener);
    return () => container.removeEventListener("keydown", eventListener);
};
