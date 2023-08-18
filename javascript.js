const flavors = prompt("Enter a list of comma-separated froyo flavors", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
const table = flavors.split(',');
console.log(table);
let list = {};
for (i = 0; i < table.length; i++) {
    const flavor = table[i];
    if (list[flavor] === undefined) {
        list[flavor] = 0;
    }
    list[flavor] = list[flavor] + 1;
}

console.log(list);