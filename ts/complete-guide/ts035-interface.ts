
// video 36
// video 37

interface itemInterface {
    name: string,
    year: number,
    isWooden: boolean
}

const firstItem: itemInterface = {
    name: 'First',
    year: 10,
    isWooden: false
}

function printItem(it: itemInterface): void {
    const m = `Name: ${it.name}, Year: ${it.year}, Made of wood: ${it.isWooden}`;
    console.log(m);

}

printItem(firstItem);
