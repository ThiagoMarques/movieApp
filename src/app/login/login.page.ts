import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.email === 'admin@admin.com' && this.password === 'admin') {
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Welcome', 'success');
    } else {
      this.presentToast('Error, user or password not found', 'danger');
    }
  }

  async presentToast(text: string, colorString: string) {
    const toast = await this.toastController.create({
      message: text,
      color: colorString,
      duration: 2000
    });
    toast.present();
  }

}
