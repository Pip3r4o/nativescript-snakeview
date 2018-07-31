import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
  public message: string;
  public values: number[];

  constructor() {
    super();
    this.values = [0, 50, 15, 34, 94, 60];
  }

  tap() {
    this.values.push(Math.floor(Math.random() * 100) + 1);
  }
}
