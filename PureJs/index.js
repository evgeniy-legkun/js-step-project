const getFullName = function (prefix = '_pref') {
  return this.name + ' ' + this.surName + ' ' + prefix;
};

// First
const person = {
  name: 'Mark',
  surName: 'Markov',
  neighbor: {
    name: 'Taras',
    surName: 'Dev'
  },
  fullName: getFullName
};

person.newField = '';

console.log('new  ', person);

// Second CLASS
function Person () {
  this.name = 'Mark';
  this.surName = 'Markov';
  this.neighbor = {
    name: 'Taras',
    surName: 'Dev'
  };
}
Person.prototype.fullName = getFullName;



class BasePerson {
  constructor () {
    this.animalName = 'Cat';
  }

  getAnimal () {
    return this.animalName + ' from getter';
  }
}

// Third
class NewPerson extends BasePerson {
  constructor () {
    super();
    this.name = 'Mark';
    this.surName = 'Markov';
    this.neighbor = {
      name: 'Taras',
      surName: 'Dev'
    };
  }

  getFullName (prefix = '_pref') {
    return this.name + ' ' + this.surName + ' ' + prefix;
  }

  getAnimal () {
    return this.animalName + ' DATA FROM CHILD ' + this.name +' _ from getter';
  }
}
const obj = new BasePerson();
const newPerson = new Person();
const admin = new Person();// Objects, Classes

// Modules JS (does not support without Babel)
// import testObj from './modules/module';
// console.log('IMPORT ', testObj);