class Person {
    constructor(name){
        this.name = name
    }

    sayHelo() {
        return `hello ${this.name} calon frontend developer suskses selalu `
    }
}

const peserta = new Person('irvan')
console.log(peserta.sayHelo())
