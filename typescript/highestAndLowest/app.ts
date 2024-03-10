function highAndLow(numbers: string): string {
    let arr = numbers.split(" ").map(e => Number(e));
    return `Highest: ${Math.max(...arr)}, Lowest:${Math.min(...arr)}`
}