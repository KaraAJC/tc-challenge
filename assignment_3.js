// CHALLENGE Three:
//

// Given the function 'assignment3' that calculates a number from a string, Find the string for which the number is: 667734139064 . The string has 7 characters and it can have repeated chars. The strings has to be formed with the characters:

// "a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w".


// PSEUDOCODE:
//  Set the above letters as a constant
// Input - a string comprised of the constant letters
// Output - an int64 object

function assignment3(str) { //function assignment3 takes a string argument
  var h = 7; // assigns 7 to variable h
  console.log('H starts as: ' + h);
  var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"]; // assigns constant letters array to variable 'letters'
  for (var i = 0; i < str.length; i++) { // for loop starting from 0 to length of the string
    var letter = str[i]; //assign sindividual letter in string being iterated on to variable 'letter'
    console.log("the letter I'm working on is: " + letter)
    var index = letters.indexOf(letter); // assigns the index value of the letter being referred to based on the letters array to 'index'
    console.log("the index you find this letter in our alphabet is: " + index)
    h = (h * 37) + index; // assigns the result of multiplying h to 37 then adding index to the variable 'h', (like a salt)
    console.log("H is changed to: " + h)
  }
  return h; //returns h
}

// the number 667734139064 is a result of int 7 + 7 other integers being multiplied by 37 & itself. What a crypt! Ideas I have to cracking it:
//  - translating the letter array to their index. NOTE: the letters go to 15
//  - remove 7 * 37 from the number since it's the first iteration?
//  - Would there be a way to reduce the number similar to the square root using 37?
//  - Seeing each iteration of the numbers shows the similarities in results of H at each letter, perhaps I could divide the number by 37 and determine what range of number it could be reduced between 0 and 15 (the index of the letter)
//  - if i hold "aaaaaaa" as the base number, and see what the difference is, it could give me an idea of what letters are used.