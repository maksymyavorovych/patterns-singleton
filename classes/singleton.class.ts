export default class Singleton {
  private static instance: Singleton;

  private fruits: Array<string> = [];

  constructor(fruits: Array<string>) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.fruits = fruits;
    Singleton.instance = this;
  }

  setFruit(fruit: string): Array<string> {
    this.fruits.push(fruit);
    return this.fruits;
  }

  getFruits(): Array<string> {
    return this.fruits;
  }

  removeFruit(fruit: string) {
    this.fruits = this.fruits.filter((f) => f !== fruit);
    return this.fruits;
  }
}
