function diffObjects(oldObj, newObj) {
    const added = {};
    const removed = {};
    const changed = {};

for (const key of Object.keys(newObj)) {

    if (!Object.hasOwn(oldObj, key)) {
        added[key] = newObj[key];
    }
}
for (const key of Object.keys(oldObj)) {
    if(!Object.hasOwn(newObj, key)) {
        removed[key] = oldObj[key];
    }
}
for (const key of Object.keys(newObj)) {
    if (
        Object.hasOwn(oldObj, key) &&
        oldObj[key] !== newObj[key]
    ){
        changed[key] = {
            old: oldObj[key],
            new: newObj[key]
         };
    }
  }
return {
    added,
    removed,
    changed
  };

}

const oldObj = {
    name:"Adedolapo",
    age:22,
    city: "Lagos"
};

const newObj = {
    name:"Adedolapo",
    age:23,
    country:"Nigeria"
};

console.log(diffObjects(oldObj, newObj));



