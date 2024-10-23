(() => {
    if (
        document.querySelector("h1").innerText !==
        "WELCOME TO THE BAND NAME GENERATOR"
    ) {
        const TEXT = document.querySelector("h1").innerText;

        const NEW_TEXT = TEXT.split(" ");
        let text = [];
        for (let i = 0; i < NEW_TEXT.length; i++) {
            if (i == 1) {
                text.push(`<span class="specialBand">${NEW_TEXT[i]}</span>`);
            } else text.push(NEW_TEXT[i]);
        }
        const CONTENT = `<span class="bandName">${text.join(" ")}</span>`;

        document.querySelector("h1").innerHTML = CONTENT;
        document.querySelector(".specialBand").style.color = "#b64d57";
    }
})();
