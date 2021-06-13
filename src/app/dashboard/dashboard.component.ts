import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  item:any;
  @ViewChild(ModalComponent)
  modal!: ModalComponent;

  listA = [
    { name: 'item 1', selected: false },
    { name: 'item 2', selected: false },
    { name: 'item 3', selected: false },
    { name: 'item 4', selected: false },
    { name: 'item 5', selected: false },
    { name: 'item 6', selected: false },
    { name: 'item 7', selected: false },
    { name: 'item 8', selected: false },
    { name: 'item 9', selected: false },
    { name: 'item 10', selected: false }
  ];

  listB = [
    { name: 'item 1', selected: false },
    { name: 'item 2', selected: false }
  ];

  constructor() { }

  public toggleSelection(item:any, list:any) {
    item.selected = !item.selected;
  }

  public moveSelected(direction:any) {
    if (direction === 'right') {
      this.listB.forEach(item => {
        if (item.selected) {
          this.listA.push(item);
        }
      });
      this.listB = this.listB.filter(i => !i.selected);
    } else {
      this.listA.forEach(item => {
        if (item.selected) {
          this.listB.push(item);
        }
      });
      this.listA = this.listA.filter(i => !i.selected);
    }
  }

  deleteItem() {
    this.listA = this.listA.filter(data => data.selected == false);
    this.listB = this.listB.filter(data => data.selected == false);
  }

  ngOnInit(): void {
  }

  showPopup() {
    this.modal.popup = true;
  }

  receiveList(data:any) {
    // this.listA = $event;
    console.log(data);

    if(data.itemlist == "List A") {
      this.listA.push(data);
    } else {
      this.listB.push(data);
    }
  }

}
