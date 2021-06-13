import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  popup: any = false;
  slectedval: boolean = true;
  itemval: any = {};

  @Output() listEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.slectedval = true;

    this.itemval = {
      name: "",
      itemlist: "",
      selected: false
    }

  }

  close() {
    this.popup = false;
    this.itemval = {};
  }

  onClickSubmit(data:any) {
    this.itemval.selected = true;
    console.log(this.itemval);

    this.close();

    this.listEvent.emit(data)

 }

}

export class addItemList {
  name: string;
  itemlist: string;
  selected: boolean;

  constructor(name: string, itemlist: string, selected: boolean) {
    this.name = name;
    this.itemlist = itemlist;
    this.selected = selected
  }
}


