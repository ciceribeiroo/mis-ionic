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

  constructor(private tosastController: ToastController) {}

    onCalculate(){
      console.log("Clicou!")
    }

    async showMessage(){
        const toast = await this.tosastController.create({
            message: "Clicou!",
            duration: 3000
        });
        toast.present();
    }
}
