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

