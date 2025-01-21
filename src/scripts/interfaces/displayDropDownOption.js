export const displayDropDownOption = () => {
    const buttonsOption = document.querySelectorAll(".mediaOption__select__option");
    const label = document.querySelector(".mediaOption__label");

    const init = (option) => {
        buttonsOption.forEach((elem) => {
            if (elem.dataset.sortName !== option) {
                elem.style.display = "none";
            } else {
                elem.style.display = "block";
            }
        });
    };

    const displayDropDown = () => {
        label.addEventListener("click", () => {
            buttonsOption.forEach((elem) => {
                elem.style.display = "block";
            });
        });
    };

    const selectOption = () => {
        buttonsOption.forEach((elem) => {
            elem.addEventListener("click", (event) => {
                init(event.target.dataset.sortName);
            });
        });
    };

    init("popularity");
    displayDropDown();
    selectOption();
};
