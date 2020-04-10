//1. Задание на копирование объектов
let origin = {
  name: "Egor",
  age: 43,
  gender: "male",
  sizes: {
    height: 177,
    weight: 80,
  },
};

let target = {
  name: "Ivan",
  family: {
    wife: "Elena",
    son: "Vasya",
  },
  cat: "Alisa",
};

function copy(target, origin) {
  for (let key in origin) {
    if (origin[key] === "object" && origin[key] !== null) {
      target[key] = copy(origin[key]);
    } else {
      target[key] = origin[key];
    }
  }
  return target;
}

copy(target, origin);


//2. Задание на сравнение объектов
let user1 = {
  name: "Igor",
  age: 15,
  isTall: true,
  gender: "male",
}

let user2 = {
  name: "Alisa",
  age: 25,
  isTall: false,
  gender: "female",
};


function areEqual(obj1, obj2) {
  if (obj1 === obj2) { return true; }
  else {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }

    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
}
let result = areEqual(user1, user2);