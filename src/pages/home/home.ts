import { Component,ElementRef,
  ViewChild, OnInit  } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { OutboxPage } from '../outbox/outbox';
import { SpecialistPage } from '../specialist/specialist';
import { SearchenginePage } from '../searchengine/searchengine';
import { PatientchatboxPage } from '../patientchatbox/patientchatbox';
import { MygeniePage } from '../mygenie/mygenie';
import { ClinicaltrailPage } from '../clinicaltrail/clinicaltrail';

declare var Draggable:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
 showdiv: boolean
 showdiv1: boolean
 showdiv2: boolean
 showdiv3: boolean
 showdiv4: boolean
 showdiv5: boolean
 showdiv6:boolean
 transform: any;
 transform1: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,) {
   
   this.showdiv1 = false;
   this.showdiv2 = false;
   this.showdiv3 = false;
   this.showdiv4 = false;
   this.showdiv5 = false;
   this.showdiv6 = false;
  }

  ngOnInit(){
    Draggable.create("#knob", {
      type: "rotation",
      throwProps: true,
      onDrag: function () {
        console.log("------------ WWW -------------");
        console.log(this.rotation);
      }
    });
  }

  ionViewDidLoad(){

  }
  // svg popup
  search(value){
    console.log(value);
    
    if(value == '1'){
      this.showdiv1 = true;
      this.showdiv2 = false;
      this.showdiv3 = false;
      this.showdiv4 = false;
      this.showdiv5 = false;
      this.showdiv6 = false;
      this.transform = 'rotate1';
    }
    if(value == '2'){
      this.showdiv2 = true;
      this.showdiv1 = false;
      this.showdiv3 = false;
      this.showdiv4 = false;
      this.showdiv5 = false;
      this.showdiv6 = false;
      this.transform = 'rotate2';
      
    }
    if(value == '3'){
      this.showdiv3 = true;
      this.showdiv1 = false;
      this.showdiv2 = false;
      this.showdiv4 = false;
      this.showdiv5 = false;
      this.showdiv6 = false;
      this.transform = 'rotate3';
    }
    if(value == '4'){
      this.showdiv4 = true;
      this.showdiv2 = false;
      this.showdiv3 = false;
      this.showdiv1 = false;
      this.showdiv5 = false;
      this.showdiv6 = false; 
      this.transform = 'rotate4';     
    }
    if(value == '5'){
      this.showdiv5 = true;
      this.showdiv2 = false;
      this.showdiv3 = false;
      this.showdiv4 = false;
      this.showdiv1 = false;
      this.showdiv6 = false;
      this.transform = 'rotate5';
    }
    if(value == '6'){
      this.showdiv6 = true;
      this.showdiv2 = false;
      this.showdiv3 = false;
      this.showdiv4 = false;
      this.showdiv5 = false;
      this.showdiv1 = false;
      this.transform = 'rotate6';
    }
  }
  goToSpecialistPage() {
    this.navCtrl.push(SpecialistPage);
  }
  goToSearchPage(){
    this.navCtrl.push(SearchenginePage);
  }
  goToPatientChatBox(){
    this.navCtrl.push(PatientchatboxPage);
  }
  goToGensPage(){
    this.navCtrl.push(MygeniePage);
  }
  goToClinicalPage(){
    this.navCtrl.push(ClinicaltrailPage);
  }
  
}
