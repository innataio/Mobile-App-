import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-specialist',
  templateUrl: 'specialist.html'
})
export class SpecialistPage {
  items = [
    'Group Name',
    'Group QR Code'
  ];
  constructor(public navCtrl: NavController) {

  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
