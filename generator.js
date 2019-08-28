function generateUsername() {
    adjListLength = onesyllableadjectives.length;
    nounListLength = nouns.length;

    adjRandomIndex = Math.floor(Math.random() * adjListLength);
    nounRandomIndex = Math.floor(Math.random() * nounListLength);

    document.getElementById("username").innerHTML = (onesyllableadjectives[adjRandomIndex] + capitalizeFirstLetter(nouns[nounRandomIndex]));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}