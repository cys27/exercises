const isPangram = str => {
    let regex = /([a-z])(?!.*\1)/g;
    let _str = str.toLowerCase();

    if (_str.match(regex).length == 26) {
        return true;
    }
    else {
        return false;
    }
}