import { textChangeRangeIsUnchanged } from "typescript";

const sample: string[] = ['this', 'is', 'my', 'smallcase', 'text'];

sample.forEach(element => {
    console.log(element);
    console.log(element.toUpperCase());
});

sample.map((text: string): void => {
    console.log(text.toUpperCase());

    //return text.toUpperCase();
});

// video 29
const imporantDates: (Date | string)[] = [];
imporantDates.push('2020.12.07');
imporantDates.push(new Date());
console.log(imporantDates);

//video 30
