import { Component, OnInit, Input } from '@angular/core';
import { ListServices } from '../services/ListServices';
import List, { Item } from '../models/List';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListServices]
})
export class ListComponent implements OnInit {
  @Input() loginInfo: any;
  data: List[];
  filteredLists:any;
  addInputValues: any = [];
  addListInputValue: any;

  constructor(
    private listServices: ListServices
  ) { }

  ngOnChanges(){
    this.listServices.getList(this.loginInfo).subscribe(data => {
      this.data = data;
      console.log(this.data);  
    })

  }
  ngOnInit() {
  }
  
  addList() {
    const newList = new List();
    newList.name = this.addListInputValue;
    newList.items = [];
    this.addListInputValue = "";

    this.listServices.addList(newList, this.loginInfo).subscribe(createdList => {
      this.data = [createdList, ...this.data];
    });
  }

  deleteList(idList: string){
    this.filteredLists = this.data.filter(
      list => list.id !== idList);
      this.data = this.filteredLists;      
    
    this.listServices.deleteList(idList, this.loginInfo).subscribe();
  }

 /* deleteItem(idList: string, idItem: string){
    const foundList = this.data.find(
      list => list.id === idList
    );
    const filteredElements = foundList.items.filter(
      item => item.id !== idItem
    );
    
  }
  
  addItem(idList: string, index: number) {
    const item = new Item();
    item.text = this.addInputValues;
    
    const foundList = this.data.find(
      list => list.id === idList
    );
    foundList.items.push(this.addInputValues[index]);
    this.addInputValues = "";

    this.listServices.updateList(idList, this.loginInfo).subscribe(createdItem => {
     
    });
  }*/
}
