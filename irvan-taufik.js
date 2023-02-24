class Person {
  constructor(name) {
    this.name = name;
  }

  sayHelo() {
    return `hello ${this.name} calon frontend developer suskses selalu `;
  }
}

class Bootcamp extends Person {
  constructor(kelas) {
    super(kelas);
    this.kelas = kelas;
  }

  study() {
    return `kelas ${this.kelas}`;
  }

  sayHelo(name) {
    const semangat = this.study();
    return `hello ${name} semangat terus belajar di ${semangat} `;
  }
}

const belajar = new Bootcamp("frontend");
console.log(belajar.sayHelo("irvan"));
