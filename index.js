function findMatching(arr, name) {
    return arr.filter(function (element) {
        return element.toUpperCase() === name.toUpperCase();
    });
}

function fuzzyMatch(arr, letters) {
    return arr.filter(function (element) {
        return element.slice(0, letters.length) === letters;
    });
}

function matchName(arr, name) {
    return arr.filter(function (element) {
        return element.name === name;
    });
}