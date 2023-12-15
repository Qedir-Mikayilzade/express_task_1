const express = require('express');
const app = express();

const employees = [
    { id: 1, name: "Hesen", age: 21 },
    { id: 2, name: "Cavid", age: 24 },
    { id: 3, name: "Yaqub", age: 17 },
    { id: 4, name: "Davud", age: 22 },
    { id: 5, name: "Eli", age: 1 }
]

app.get('/', function (req, res) {
    res.send(employees);
})

app.listen(3002, function () {
    console.log('metn');
});

