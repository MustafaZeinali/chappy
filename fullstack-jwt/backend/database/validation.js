
function isValidId (p) {
    let maybeId = Number(p);

    if (isNaN(maybeId)) {
        return false;
    }
    return maybeId >= 0
}

function isValidUser (x) {
    if (!typeof x === 'object') {
        return false;
    }else if ( x === null ) {
        return false;
    }
}

export { isValidId , isValidUser};