import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { AddConditionPage } from '../add-condition/add-condition';

@Component({
  selector: 'page-mygenie',
  templateUrl: 'mygenie.html'
})


export class MygeniePage {

  expended:         boolean;
  expended_null:    boolean;
  condition_form:   boolean;
  expended_added:   boolean;
  expended_expended:boolean;

  constructor(public navCtrl: NavController,platform: Platform ) { 
    this.expended = false;
    this.expended_null = false;
    this.condition_form = false;
    this.expended_added = false;
    this.expended_expended = false;

    platform.ready().then((readySource) => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  }

  ionViewDidLoad(){
    this.expended = true;
  }

  showExpended_null() {
    this.expended_null = true;
    this.expended = false;
    this.expended_added = false;
    this.expended_expended = false;
  }

  showExpended_Added() {
    this.expended_added = true;
    this.expended = false;
    this.expended_null = false;
    this.expended_expended = false;
  }

  goToAddCondition() {
    this.navCtrl.push(AddConditionPage);
  }
 
}
