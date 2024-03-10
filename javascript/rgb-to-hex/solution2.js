const rgbToHex = (r, g, b) => {
    const ntoHex = (n) => {
        const hex = n.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    return "#" + ntoHex(r) + ntoHex(g) + ntoHex(b);
}