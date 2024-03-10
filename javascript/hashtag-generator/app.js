const generateHashtag = str => {
    if (str === "" || str === " ".repeat(str.length)) return false;
    else {
        let array = str.trim().split(" ");
        let result = [];
        for (const string of array) {
            result.push(string.charAt(0).toUpperCase() + string.slice(1));
        }

        let hashtag = result.join("");
        if (hashtag.length > 139) return false;
        else {
            return "#" + hashtag;
        }
    }
}