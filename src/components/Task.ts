/* eslint-disable no-useless-constructor */
export default class Task {
  done = false;

  constructor (public title: string) {
  }

  public toggle() {
    this.done = !this.done;
  }
}
