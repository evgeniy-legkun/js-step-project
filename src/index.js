// ASYNC JS
import axios from 'axios';

// PROMISES
new Promise((resolve, reject) => {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
  }).then((result) => {
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
})
  .then((result) => {
    const users = result.data;
    if (Array.isArray(users) && users.length !== 0) {
      return users.filter((user) => { return user.website === 'elvis.io' })[0] || [];
    } else {
      return [];
    }
  })
  .then((user) => {
    return axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users/' + user.id
    }).then((result) => {
      return result.data;
    }).catch((err) => {
      return err;
    });
  })
  .then((dataOfNeededUser) => {
    // console.log('USER DATA (Promise)', dataOfNeededUser);
  })
  .catch((error) => {
    // console.log('Error (Promise)', error);
  });

// Async / Await
async function getUsers() {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = result.data;
  console.log('USERS', users);
}

async function getData () {
  getUsers().then(() => {
    console.log('Code after getUsers function !!!!!!!!!!!!!!!');
  });
}

getData();
