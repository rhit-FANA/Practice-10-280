const book ={
    title: "Ego is the enemy",
    author: "Ryan Holiday"
}
const bookJSON = JSON.stringify(book);
console.log(bookJSON);
console.log(bookJSON.title);
const bookParsed = JSON.parse(bookJSON);
console.log(bookParsed.title);
const fs = require('fs');
fs.writeFileSync('1-json.json',bookJSON);
// const dataBuffer = fs.readFileSync('1-json.json'); 
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
// const data = JSON.parse(dataBuffer);
// console.log(data);
console.log(dataBuffer)
const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city)
data.name = "Aaron";
data.city = "Terre Haute";
const updateDataJSON = JSON.stringify(data)
fs.writeFileSync('data.json', updateDataJSON)

