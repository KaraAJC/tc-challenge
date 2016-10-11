// CHALLENGE Three:
//

// Given the function 'assignment3' that calculates a number from a string, Find the string for which the number is: 667734139064 . The string has 7 characters and it can have repeated chars. The strings has to be formed with the characters:

// "a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w".


// PSEUDOCODE:
//  Set the above letters as a constant
// Input - a string comprised of the constant letters
// Output - an int64 object

var assignment3 = function assignment3(str) {                                       //function assignment3 takes a string argument
  var h = 7;                                                                        // assigns 7 to variable h
  console.log('H starts as: ' + h);
  var letters = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];  // assigns constant letters array to variable 'letters'
  for (var i = 0; i < str.length; i++) {                                            // for loop starting from 0 to length of the string
    var letter = str[i];                                                            //assign sindividual letter in string being iterated on to variable 'letter'
    console.log("the letter I'm working on is: " + letter)
    var index = letters.indexOf(letter);                                            // assigns the index value of the letter being referred to based on the letters array to 'index'
    console.log("the index you find this letter in our alphabet is: " + index)
    h = (h * 37) + index;                                                           // assigns the result of multiplying h to 37 then adding index to the variable 'h', (like a salt)
    console.log("H is changed to: " + h)
  }
  return h;                                                                           //returns h
};

var wip_assignment3 = function wip_assignment3 (cryptedNum) {
  var cryptKey = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
  var letters = 0;
  var alphabetCodes = [cryptedNum]
  do {
  // divide the cryptedNum by 37
    cryptedNum = (cryptedNum/37).toFixed(0);
    console.log( "the cryptedNum this round is: " + cryptedNum );
    alphabetCodes.push(cryptedNum)
    console.log("the codes collected are: " + alphabetCodes)
  // saving the iterations will tell us how many letters there are.
    letters++;
    console.log("there are " + letters + " letters")
  }
  //save each result until you get to Equal or Less than 259.
  while (cryptedNum > 259);
  var phrase = []
  // at each letter, we use the base numbers of a, aa, etc. to find the difference
  // using that difference, increment up the letters array and save it to a return string
  for (i = 0; i < alphabetCodes.length; i++) {
    var letter = cryptKey[alphabetCodes[alphabetCodes.length-(i+2)] - alphabetCodes[alphabetCodes.length-(i+1)]*37]
    phrase.push(letter);
    console.log(phrase);
//     TEST CODE TO FIGURE OUT THE ABOVE LOGIC
    // var firstLetter = cryptKey[(alphabetCodes[alphabetCodes.length-1]-259)];
    // console.log("the first letter is: " + firstLetter)
    // ;
    // var nextLetter = cryptKey[alphabetCodes[alphabetCodes.length-2] - alphabetCodes[alphabetCodes.length-1]*37];
    // console.log("the next letter is: " + nextLetter)
  }
  phrase.pop();
  return phrase.join("");
};



// Function without Console Logs & annotation:
var decryptAssignment3 = function decryptAssignment3 (cryptedNum) {
  var cryptKey = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
  var letter_count = 0;
  var alphabetCodes = [cryptedNum]
  do {
    cryptedNum = (cryptedNum/37).toFixed(0);
    alphabetCodes.push(cryptedNum)
    letter_count++;
  }
  while (cryptedNum > 259);
  var phrase = []
  for (i = 0; i < alphabetCodes.length; i++) {
    var letter = cryptKey[alphabetCodes[alphabetCodes.length-(i+2)] - alphabetCodes[alphabetCodes.length-(i+1)]*37]
    phrase.push(letter);
  }
  phrase.pop();
  return phrase.join("");
};