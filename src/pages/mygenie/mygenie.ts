import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-mygenie',
  templateUrl: 'mygenie.html'
})


export class MygeniePage {
  data: { id: number; name: string; username: string; notes: string; }[];
 
  settings = {
    
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Condition Name'
      },
      username: {
        title: 'Congenital heart disease'
       
      },
      notes: {
        title: 'Notes'
      }
      
    }
    
  };
  constructor(public navCtrl: NavController ) { 
    this.data = [
      {
        id: 1,
        name: "Risk level",
        username: "High genetic susceptibility to develop the condition",
        notes: ""
      },
      {
        id: 2,
        name: "Prevalences",
        username: "5-8/1000 live births",
        notes: ""
      },
    
      
      {
        id: 11,
        name: "Onset age ",
        username: "Adulthood",
        notes: ""
      }
    ];
  }
 
}
