
function isValidId (p) {
    let maybeId = Number(p);

    if (isNaN(maybeId)) {
        return false;
    }
    return maybeId >= 0
}

function isValidUser (a) {
    if (!typeof a === 'object') {
        return false;
    }else if ( a === null ) {
        return false;
    }
}

function isValidGroup (x) {
    if (typeof x !== 'object') {
        return false;
    }else if ( x === null ) {
        return false;
    }
    let messageIsValid = (typeof x.message) === 'string'
    messageIsValid = messageIsValid && x.message !== ''

    return true
}

export { isValidId , isValidUser , isValidGroup};