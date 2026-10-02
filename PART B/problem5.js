function validateSchema(obj, schema) {
    const errors = [];
    for (const key of Object.keys(schema)) {
        if (!Object.hasOwn(obj, key)) {
            errors.push(`Missing key: ${key}`);
        }
        else if(typeof obj[key] !== schema[key]) {
            errors.push(
                `Invalid type for ${key}: expected ${schema[key]}, got ${typeof obj[key]}`
            );
        }
    }
    return errors;
}
const student = {
    name:"Adedolapo",
    age:22,
};

const schema = {
    name:"string",
    age:"number"
};
console.log(validateSchema(student, schema));