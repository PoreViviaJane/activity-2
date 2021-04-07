import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


contName = "";
  contNumber = "";
  contacts: any = [];

  constructor(public alertCtrl: AlertController) { }

  saveCont() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
      this.contacts.push(contact);
      this.clearField();
    }

  clearField() {
    this.contName = "";
    this.contNumber = "";
  }

  async deleteCont(cont){
    const confirm = await this.alertCtrl.create({
      message: 'Are you sure you want to delete this contact?',
      buttons: [
        {
          text: 'Back',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index, 1);
            }
          }
        }
      ]
    });
  await confirm.present();
}

 
}
