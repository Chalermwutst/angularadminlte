import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.scss']
})
export class AppmenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready (() => {
      const trees: any = $('[data-widget = "treeview"]');
      trees.Treeview();
    });
  }

}
