
const father = {
    name: "Igor",
    height: 185,
    age: 45,
    isWorking: true
};

const son = {
    name: "Ivan",
    age: 22,
    hobbies: {
        firstHobby: "Basketball",
        secondHobby: "Computer games",
    }
};

function deepCopy(origin) {
    if (typeof origin !== "object" || origin === null) {
        return origin;
    }
    
    let target = {};

    for (let key in origin) {
        let temp = origin[key];
        if (typeof temp === "object" && temp !== null) {
            target[key] = deepCopy(temp);
        } else {
            target[key] = temp;
        }
    }
    return target;
}

let son2 = deepCopy(son);
console.log(son);
console.log(son2);

function deepEquals(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 !== Object(obj1) && obj2 !== Object(obj2)) {
        return obj1 === obj2;
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        } else if (!deepEquals(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
console.log(deepEquals(son, son2));
console.log(deepEquals(son, father));