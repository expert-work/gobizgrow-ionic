import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.page.html',
  styleUrls: ['./account-information.page.scss'],
})
export class AccountInformationPage implements OnInit {
  isActiveTab:any
  constructor() { 
    this.isActiveTab='account';

   }

  ngOnInit() {
  }

  updateActiveTab(tab:any){
    this.isActiveTab=tab;
  }
}
