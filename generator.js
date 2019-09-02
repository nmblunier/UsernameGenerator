function generateUsername() {
    adjectiveRandomIndex = Math.floor(Math.random() * adjectives.length);
    adverbRandomIndex = Math.floor(Math.random() * adverbs.length);
    nounRandomIndex = Math.floor(Math.random() * nouns.length);
    verbRandomIndex = Math.floor(Math.random() * verbs.length);

    document.getElementById("username").innerHTML = (adjectives[adjectiveRandomIndex] + capitalizeFirstLetter(nouns[nounRandomIndex]));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}