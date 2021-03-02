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
        const toast = await this.tosastController.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    }
}
