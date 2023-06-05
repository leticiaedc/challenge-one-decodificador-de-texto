const patterns = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];


export function encrypt(stringEncrypted) {

    stringEncrypted = stringEncrypted.toLowerCase();

    for (let i = 0; i < patterns.length; i++) {
        if (stringEncrypted.includes(patterns[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(patterns[i][0], patterns[i][1]);
        }
    }

    return stringEncrypted;
}

export function decrypt(stringDecrypted) {

    stringDecrypted = stringDecrypted.toLowerCase();

    for (let i = 0; i < patterns.length; i++) {
        if (stringDecrypted.includes(patterns[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(patterns[i][1], patterns[i][0]);
        }
    }

    return stringDecrypted;
}

