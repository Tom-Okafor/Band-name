import { getData } from "./model.js";

const WORDS = getData();
function createBandName() {
    const NAME_LENGTH = Math.floor(Math.random() * 2 + 2);
    const NAME = [];
    const INITIALS = [];
    for (let i = 0; i < NAME_LENGTH; i++) {
        if (i === NAME_LENGTH - 1) {
            NAME.push(
                WORDS.nouns[Math.floor(Math.random() * WORDS.nouns.length)]
            );
        } else {
            NAME.push(
                WORDS.adjectives[
                    Math.floor(Math.random() * WORDS.adjectives.length)
                ]
            );
        }
    }

    for (let i = 0; i < NAME_LENGTH; i++) {
        INITIALS.push(NAME[i][0]);
    }
    const BAND_NAME = NAME.join(" ");
    let initials = `(${INITIALS.join(".")})`;
    return `${BAND_NAME} ${initials}`;
}

export function sendNames(request, response)  {
    response.render("index.ejs", { BAND_NAME: createBandName() });
}