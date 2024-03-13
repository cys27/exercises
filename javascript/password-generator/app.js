const generate = len => {
    chars = [];
    for (let i = 33; i <= 126; i++) {
        chars.push(i);
    }
    chars = chars.map(n => String.fromCharCode(n));

    let result = "";
    for (let i = 0; i < len; i++) {
        const randomN = Math.floor(Math.random() * chars.length);
        result += chars[randomN];
    }
    return result;
}
