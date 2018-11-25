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
const admin = new Person(); // Objects, Classes

// Modules JS (does not support without Babel)
import baseModule from './modules/module';

// ASYNC JS

// Async js via callbacks
function getProviders (callBack) {
  setTimeout(() => {
    callBack([1.1, 1.2, 1.3]);
  }, 1000);
}

function getProductCategories (providers, callBack) {
  setTimeout(() => {
    callBack([...providers, 2.1, 2.2, 2.3]);
  }, 1000);
}

function getProducts () {
  return getProviders(function (providers) {
    return getProductCategories(providers, function (caterories) {
      return setTimeout(() => {
        const result = [...caterories, 3.1, 3.2, 3.3];
        console.log('RESULT', result);
      }, 1000);
    });
  });
}

getProducts();
