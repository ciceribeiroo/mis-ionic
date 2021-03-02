import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@NgModule({
  imports: [
    IonicModule
  ]
})
export class HomePage {

  weight: number;
  height: number;

  constructor(private tosastController: ToastController) {}

    onCalculate(){
      const imc = this.weight / (this.height*this.height)
      this.showMessage(`IMC = ${imc.toFixed(2)}`)
    }

    async showMessage(msg: string){
        const previousToast = await this.tosastController.getTop();
        if(previousToast){
          //return; -> se alterou os valores não recalcula
          await this.tosastController.dismiss();
        }

        const toast = await this.tosastController.create({
            message: msg,
            color: 'light',
            buttons: [{
              icon: 'close'
            }]
        });
        toast.present();
    }
}
