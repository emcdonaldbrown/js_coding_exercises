export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
    
    return sandwich.fillings;

}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  
    if (person.city === 'Manchester')
      return true;
    else
      return false;
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

    return Math.ceil(people / 40);
  
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  
    var count = 0;
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] == 'sheep')
            count++;
    }

    return count;
      
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

}
