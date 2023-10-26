// A. Take a sentence as an input and reverse every word in that sentence.
// 	a. Example - This is a sunny day > shiT si a ynnus yad.

// TC=O(n)   SC=O(n)

function reverseWords(str) {
	let arr = [];


	for (let i = 0; i < str.length;i++) {
		if (str[i] != ' ')
			arr.unshift(str[i]);
			
		else {
			while (arr.length != 0) {
				process.stdout.write(arr[0]);
			arr.shift();
			}
			process.stdout.write(' ');
		}
	}

	while (arr.length != 0) {
	process.stdout.write(arr[0]);
		arr.shift();
	}
}

let str = 'This is a sunny day'
reverseWords(str);


