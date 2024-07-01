# Complexity for Balanced Bracket

The algorithm that I'm using has a complexity of `O(n)`.

The initialization of the bracket map has a fixed size of 3 key-value pairs, thus it is has a complexity of `O(1)`
There is only one non-nested for loops inside of the code which will loop through the input string of `bracketSet`. This has a complexity of `O(n)` where n is the length of the input.

`hasOwnProperty`, `push, and pop` method also has a constant time operation or `O(1)` so every operation inside of the for loop has a constant time of O(1)

Since the loop runs `n` times and no nested loops inside it the time complexity is `O(n).`

I think O(n) would be the best time complexity to aim for in this problem.
