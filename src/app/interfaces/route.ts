
export class Route {
  id: Number;
  m: Promise<any> = import(`../tabs-contents/tab1/tab1.page`)

  constructor(id: number = 1, m: Promise<any>) {
    this.id = id;
    this.m = m;
  }

  route() {
    return {
      path: 'tab' + this.id,
      loadComponent: () =>
        this.m.then((m) => m[`Tab${this.id}Page`]),
    };
  }

}
