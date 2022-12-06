const URL = "http://numbersapi.com/";

// Problem 1
let numberFact = axios
  .get(URL + "random/trivia?json")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

// Problem 2
let fourNums = [5, 26, 42, 17];
let batchURL = URL;
for (const num of fourNums) {
  batchURL += `${num},`;
}
batchURL = batchURL.slice(0, -1);

let batchFacts = axios
  .get(batchURL + "?json")
  .then((res) => {
    for (const num of fourNums) {
      $("body").append(`<p>${res.data[num]}</p>`);
    }
  })
  .catch((err) => console.log(err));

// Problem 3
const myNums = [69, 420, 23, 10];
let numPromises = [];
for (const num of myNums) {
  numPromises.push(axios.get(`${URL + num}/trivia?json`));
}

Promise.all(numPromises).then((promiseArr) => {
  $("body").append(`<h1>Promise.all</h1>`);
  for (const promise of promiseArr) {
    $("body").append(`<p>${promise.data.text}</p>`);
  }
});
