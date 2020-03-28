export class Item {
    public _id : string;
    public text : string;
}

export default class List {
    public _id : string;
    public name : string;
    public items: Item[];
  }