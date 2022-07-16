export default class Singleton {
    constructor(fruits) {
        this.fruits = [];
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.fruits = fruits;
        Singleton.instance = this;
    }
    setFruit(fruit) {
        this.fruits.push(fruit);
        return this.fruits;
    }
    getFruits() {
        return this.fruits;
    }
    removeFruit(fruit) {
        this.fruits = this.fruits.filter((f) => f !== fruit);
        return this.fruits;
    }
}
