/* eslint-disable no-useless-constructor */
export default class Task {
  static nextId = 0;

  id: number;
  done = false;

  constructor (public title: string) {
    this.id = Task.nextId;
    Task.nextId++;
  }
}
