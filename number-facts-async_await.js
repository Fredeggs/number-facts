const URL = "http://numbersapi.com/";

// Problem 1
async function getNumberFact() {
    let res = await axios.get(URL + "random/trivia?json")
    console.log(res.data.text)
}

getNumberFact()


// Problem 2
let fourNums = [5, 26, 42, 17];
let batchURL = URL;
for (const num of fourNums) {
    batchURL += `${num},`;
}
batchURL = batchURL.slice(0, -1);

async function displayBatchFacts() {
    let res = await axios.get(batchURL + "?json");
    for (const num of fourNums) {
        $("body").append(`<p>${res.data[num]}</p>`);
    }
}
displayBatchFacts()

// Problem 3
async function fourFactsOneNum(num) {
    let numData = await Promise.all([
        axios.get(`${URL + num}/trivia?json`),
        axios.get(`${URL + num}/trivia?json`),
        axios.get(`${URL + num}/trivia?json`),
        axios.get(`${URL + num}/trivia?json`),
    ])

    console.log(numData);
    $("body").append("<h1>One Number, Four Facts</h1>")
    for (let num of numData) {
        $("body").append(`<p>${num.data.text}</p>`)
    }
}

fourFactsOneNum(23)
