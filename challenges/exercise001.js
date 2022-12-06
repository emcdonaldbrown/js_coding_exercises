// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
    return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
    const newPrice = originalPrice + (originalPrice * (vatRate / 100));
    if (Number.isInteger(newPrice))  
      return newPrice;
    else 
      return parseFloat(newPrice.toFixed(2));

}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
    
    const newPrice = originalPrice - (originalPrice * (reduction / 100));
    if (Number.isInteger(newPrice))
      return newPrice;
    else
      return parseFloat(newPrice.toFixed(2));
    
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

    var stringMiddle = str.length / 2;

    if (str.length % 2 == 1) 
      return str.substring(stringMiddle, (stringMiddle + 1));
    else
      return str.substring((stringMiddle - 1), ((stringMiddle - 1) + 2)); 

}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

    let newWord = "";

    for (let iCount = 0; iCount < word.length; iCount++) {
      newWord = word.charAt(iCount) + newWord;
    }

    return newWord;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
    let wordArray = words.split.map(word => word.split("").reverse().join(""));
    return wordArray.join(" ");
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
