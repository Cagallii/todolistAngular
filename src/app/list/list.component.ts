import { Component, OnInit, Input } from '@angular/core';
import { ListServices } from '../services/ListServices';
import List from '../models/List';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListServices]
})
export class ListComponent implements OnInit {
  @Input() loginInfo: any;
  data: List;
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
  
  addList(){
    const newList = new List();
    newList.name = this.addListInputValue;
    newList.items = [];
    this.addListInputValue = "";
    const newListData = {...newList,...this.data};
    

 this.listServices.addList(newListData, this.loginInfo).subscribe(data => {
        this.data = newListData;
      });
  }

}
