/*
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
const admin = new Person(); // Objects, Classes

// Modules JS (does not support without Babel)
import baseModule from './modules/module';
import { getNameWithPrefix, variable } from './modules/module';
import min from 'lodash/min';

console.log('TEST IMPORT 1', baseModule);
console.log('TEST IMPORT 2', getNameWithPrefix('Masha', ' admin'));


if (module.hot) {
  module.hot.accept('../message.js', function () {
    print();
  });
}
*/


//////неработающий код, не сделал
/*
function getCat() {
    return 'cat';
}

function getDog() {
    return 'dog';
}

function getChicken() {
    return 'chicken';
}

function getListAnimals() {
    return getChicken() {
      return getDog(){
          return getCat(){
              return setTimeout(() => {
                  const result = [animals];
                  console.log('ListAnimal ', animals);
              },1000);
            }
        }
    })
}
function animals() {

}
*/

/*

function getProductCategories(callBack) {
    setTimeout(()=>{
        const result=['sdfv1', 'dfv2' , 't3'];
        callBack(result);
        return result;
    }, 1000);
}
function getProducts(productCategories) {
  setTimeout(()=>{
   const result = [...productCategories, 'shirt', 'sdfsd' , 'trousers'];
      console.log('product with Categories', result);
   return result;
  }, 1000);
}

getProductCategories(function (productCategories) {
    getProducts(productCategories);
});


getProducts();
*/

import axios from 'axios';
const promise = new Promise((resolve, reject ) => {
    axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    }), then((result) => {
        resolve(result);
    }).catch((err) => {
        reject(err);
    });
});

promise
    .then((result) => {
const users=result.data;
if(Array.isArray(user) && users.length !==0 ) {
    return users.filter((user) => {return user.website === 'elvis.io'})[0] || []
} else {
    return []
}
    })
    .then((user) => {

    })
