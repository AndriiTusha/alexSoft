let alphabet = "qwertyuiopasdfghjklzxcvbnm";
let count = 0;
let str = "";
while (count < 5) {
    let randomLetter = alphabet.split('')[(Math.floor(Math.random() * alphabet.split('').length))];
    str += randomLetter;
    count++;
}
let strToArr = str.split('');
let newNode = document.querySelector('#root');
let optionTag = document.createElement('select');
newNode.append(optionTag);
for (let i = 0; i < strToArr.length; i++) {
    console.log(strToArr[i]);
    let selectTag = document.createElement('option');
    selectTag.innerHTML = strToArr[i];
    optionTag.append(selectTag);
};

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("D:/HTML tasks/new task/list.json", function(text) {
    var data = JSON.parse(text);
    console.log(data);
});