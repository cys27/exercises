function camelCase() {
    let arr = this.split(" ");
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return result.join("");
}