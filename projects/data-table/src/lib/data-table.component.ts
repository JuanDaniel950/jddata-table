import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'jd-DataTable',
  templateUrl: './data-table.component.html',
  styleUrls:['./data-table.component.css']  
})
export class DataTableComponent implements OnInit {

  
  @Input() title:string;
  @Input() columnsName: any;
  @Input() labelSearch: string;
  @Input() viewMore:boolean= false;
  @Input() dataTable:any[];
  @Input() dataColumns: any;
  @Output() data = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  vewMoreDetails(data){
    this.data.emit(data)
  }
}
