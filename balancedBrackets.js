"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBracketBalanced = isBracketBalanced;
function isBracketBalanced(bracketSet) {
    var bracketMap = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    var stack = [];
    for (var _i = 0, bracketSet_1 = bracketSet; _i < bracketSet_1.length; _i++) {
        var bracket = bracketSet_1[_i];
        if (!(bracketMap.hasOwnProperty(bracket))) {
            stack.push(bracket);
        }
        else {
            if (stack[stack.length - 1] !== bracketMap[bracket]) {
                return "NO";
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}
// console.log(`input: [[]][]() => Is bracket balanced: ${isBracketBalanced("[[]][]()")}`,)
// console.log(`input: (()[] => Is bracket balanced: ${isBracketBalanced("(()[]")}`,)
// console.log(`input: (((([]])))) => Is bracket balanced: ${isBracketBalanced("(((([]]))))")}`,)
// console.log(`input: (((([])))) => Is bracket balanced: ${isBracketBalanced("(((([]))))")}`,)
