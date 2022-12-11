export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");


  const squared = nums.map(num => (num * num));

  return squared;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join('');

}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

    var iTotal = 0;

    people.forEach((obj, i) => {
      
      iTotal = iTotal + (obj.subjects.length);
    
    });

    return iTotal;
  
  }

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

    const filterValue = ingredient;
    const filteredMenu = menu.filter(val => val.ingredients.includes(filterValue));

  
    console.log(filteredMenu);

    if (filteredMenu === '[]')
      return false;
    else
      return true;
    
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!

  var iAvail = false;

  menu.forEach((obj, i) => {

    console.log(obj.ingredients);
    console.log(ingredient);

    if ((obj.ingredients).includes(ingredient)) 
        iAvail = true;
      else
        iAvail = false;
  
  });

  return iAvail;
}
