/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
const max = (x, y) => {
  if (x > y) {
    return x;
  }
  else {
    return y;
  }
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

const maxOfThree = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  }
  else if (y > x && y > z) {
    return y;
  }
  else {
    return z;
  }
}

// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (a, b) => {
  const result = a + b;
  return result;
}

// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 
 */

const sumOfArray = (array) => {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
const isVowel = (a) => {
  const vowelString = "'a','i','e','o','u','A','I','E','O','U'";
  if (vowelString.includes(a)) {
    return true;
  }
  else {
    return false; y
  }
}


// ...

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

// ...
// phrase = 'this is fun'


const rovarspraket = (phrase) => {

  if (typeof phrase == 'number') {
    let convertedPhrase = phrase.toString()
    return convertedPhrase;
  }
  else {
    // list of consonants
    const consonants = "bcdfghjklmnpqrstvwxz";
    //taking the passed string and splitting it

    let newString = phrase.split('');

    // ('t', 'h','i, ...')
    // loop through the string to identify consonants
    let b = [];

    for (var i = 0; i < phrase.length; i++) {
      //if true take each element and apply new string
      if (consonants.includes(newString[i])) {
        let newText = newString[i] + "o" + newString[i];
        // console.log(newString[i])
        b.push(newText);
      }
      else {
        // console.log(newString[i]);
        b.push(newString[i]);

      }
    }
    // console.log(b)
    // console.log(typeof b)

    // console.log(b)
    let answer = b.join("");
    // console.log(answer)
    return answer;
  }
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// ...

const reverse = (word) => {
  return word.split('').reverse().join("");
 }

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

// ...

const findLongestWord = (str) => {
  //break up the string  book dog
  let words = str.split(' ');
  console.log(str)

  //
  let longest = 0;
  let findLongestWord = ''
  //loop this string 


  for (var i = 0; i < words.length; i++) {
    console.log(words)
    if (words[i].length > longest) {
      longest = words[i].length;
      // console.log(words[i].length)
      findLongestWord = words[i];
    }
  }
  return findLongestWord;
}



/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
  // t.is(findLongestWord('everything'), 'life the universe and everything')

})

/* eslint-enable */
