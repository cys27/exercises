const rgbToHex = (r, g, b) => {
    const data = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    }

    const r1 = parseInt(r / 16),
        r2 = r % 16;

    const g1 = parseInt(g / 16),
        g2 = g % 16;

    const b1 = parseInt(b / 16),
        b2 = b % 16;

    const result = "#" + data[r1] + data[r2] + data[g1] + data[g2] + data[b1] + data[b2];
    return result;
}