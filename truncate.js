// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
function truncateWords() {

// Use the split() function to split the String into an Array   
  var arrayOfStrings = originalText.split(" ");

  
// Use the length attribute to find the number of words in the Array  
  var totalLength = arrayOfStrings.length;

  
// Determine how many words should be removed from the String. Use wordLimit() and then Use splice() to remove those words from the Array
// Add an additional String item to the Array to put an ellipses in: "..."
  var wordLimit = arrayOfStrings.splice(8);


// Use the join() function to convert the Array back into a String
  var newString = wordLimit.join(" ");  

// Return the truncated String from the Function
  return newString;
  
}

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
