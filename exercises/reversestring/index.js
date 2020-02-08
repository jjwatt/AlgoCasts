// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // return str.split('').reduce((reversed, character) =>
    //     character + reversed
    //                             , '');

    // let reversed = '';
    // for (let i of str) {
    //     reversed = i + reversed;
    // }
    // return reversed;

	// let outputStr = '';
	// for (let i = str.length; i > 0; --i) {
	// 	outputStr = "".concat(outputStr, str[i-1]);
	// }
	  // return String(outputStr);

    // Recursive/Functional
    return revs_aux(str, [], 0);
}

// Functional helper
function revs_aux(strin, list, index) {
    if (list.length == strin.length) {
        return list;
    }
    else {
        return revs_aux(strin,
                        strin[index] + list,
                        index+1);
    }
}

module.exports = reverse;
