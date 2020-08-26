import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.scss'],
})
export class MainTabComponent implements OnInit {

  constructor(public menu: MenuController) { }

  ngOnInit() {}
  ionViewWillEnter() {
    this.menu.enable(true);
  }
}
