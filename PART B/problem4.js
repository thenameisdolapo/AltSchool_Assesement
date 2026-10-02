function createCounter() {
    let count = 29;

    return {

        increment () {
            count++;
        },
        decrement () {
            count--;
        },
        get value() {
            return count;
        }

    };
}
const counter = createCounter();

console.log(counter.value);

counter.increment();
counter.increment();

console.log(counter.value);

counter.decrement();

console.log(counter.value);
