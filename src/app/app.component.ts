import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as AdminLte from 'admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {
  ngOnInit(): void {
    AdminLte.Layout._jQueryInterface.call($('body'));
    AdminLte.PushMenu._jQueryInterface.call($('[data-widget="pushmenu"]'));
    AdminLte.ControlSidebar._jQueryInterface.call($('[data-widget="control-sidebar"]'));
   
   // $('[data-widget="treeview"]').Treeview('init');
   // AdminLte.pus._jQueryInterface.call($('[data-widget="control-sidebar"]'));
  }

 // toggleBtnSelector: "[data-toggle='control-sidebar']",
  title = 'my-dream-app';
}
