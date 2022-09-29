class Animal {
    constructor() {
        this.name="レオ";
        this.age=3;
    }
}

const animal = new Animal();

document.write(`名前は${animal.name}`);

document.write('<br>');

document.write(`年齢は${animal.age}`);