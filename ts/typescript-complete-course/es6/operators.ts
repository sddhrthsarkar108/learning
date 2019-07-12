// spread
const numbers = [2, -1, 6, -2];
console.log(Math.max(...numbers)); // spead out elenents in unit values

// rest
function makeArray(name: string, ...args: number[]): number[] {
    return args;
}
makeArray('sid', 1, 2, 3);