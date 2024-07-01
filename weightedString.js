"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightedString = weightedString;
function weightedString(inputString, queries) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var weightedAlphabet = new Map();
    alphabet.split('').forEach(function (_alphabet, index) {
        weightedAlphabet.set(_alphabet, index + 1);
    });
    var sums = [];
    var previous = "";
    var length = 0;
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var char = inputString_1[_i];
        if (previous.includes(char)) {
            length++;
            sums.push(weightedAlphabet.get(char) * length);
        }
        else {
            previous += char;
            length = 1;
            sums.push(weightedAlphabet.get(char));
        }
    }
    return queries.map(function (query) { return sums.includes(query) ? "Yes" : "No"; });
}
var inputString = 'abbcccd';
var queries = [1, 3, 9, 8];
console.log('input', inputString);
console.log('queries', queries);
console.log(weightedString(inputString, queries));
