function deepFreeze(obj) {
    for (const key of Object.keys(obj)) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);

        }
    }
    Object.freeze(obj);

    return obj;
}
const person = {
    name:"Adedolapo",
    address:{
        city:"Lagos",
        country:"Nigeria"
    }

};
deepFreeze(person);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));

