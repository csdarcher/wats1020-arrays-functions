// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// originalText (a String with several words in it)
// wordLimit (an Integer that sets the number of words you want in the returned text)
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
function truncateWords(originalText, wordLimit) {

// Split the String into an Array   
  var originalTextArray = originalText.split(" ");

  
// Find the number of words in the Array  
  var totalLength = originalTextArray.length;

  
// Determine how many words should be removed from the String. 15-8=7
// Use wordLimit() and then use splice() to remove those words from the Array
// Add an additional String item to the Array to put an ellipses in: "..."
  var difference = (originalTextArray.length - wordLimit);
  originalTextArray.splice(wordLimit, difference, '...');


// Use the join() function to convert the Array back into a String
  var finalOutput = originalTextArray.join(" ");  

// Return the truncated String from the Function
  return finalOutput;  
}

var truncated = truncateWords(originalText, wordLimit); 

// This portion of the script is meant to call and display the result of the Function.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var finalOutput = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('finalOutput: ' + finalOutput);

