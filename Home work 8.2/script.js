//1. forEach
function forEachCust(array, cb){
  for(let i = 0; i < array.length; i++){
    cb(array[i], i, array);
  }
}

//2. map
function mapCust(array, cb){
  let results = [];
  for (let i = 0; i < array.length; i++){
    results.push(cb(array[i], i,array));
  }
  return results;
}

//3. filter
function filterCust(array, cb){
  let results = [];
  for(let i = 0; i < array.length; i++){
    if(cb(array[i], i, array)){
      results.push(array[i]);
    }
  }
  return results;
}

//4. some
function someCust(array, cb){
  for(let i = 0; i < array.length; i++){
    if(cb(array[i], i, array)){
      return true;
    }
  }
  return false;
}

//5. every
function everyCust(array, cb){
  for(let i = 0; i < array.length; i++){
    if(!cb(array[i], i, array)){
      return false;
    }
  }
  return true;
}

//Test forEach
let models = ["BMW", "Audi", "Renault" ];
forEachCust(models, function(item, index, array){
  console.log(index + ": item " + item + ": of array " + array);
});


//map test
let names = ["Vasya", "George", "Sam"];
console.log(mapCust(names, (name) => name.length));

let numbers = [111, -2, 232, -234, 764];
//filter test
console.log(filterCust(numbers, number => number > 0));
//some test
console.log(someCust(numbers, number => number < 0));
//every test
console.log(everyCust(numbers, number => number < 0));