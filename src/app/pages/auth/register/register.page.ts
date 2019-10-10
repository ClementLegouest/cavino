import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private modal: ModalController,
              private auth: AuthService,
              private navCtrl: NavController,
              private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  // Dismiss Register Modal
  dismissRegister() {
    this.modal.dismiss();
  }

  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modal.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

  register(form: NgForm) {
    this.auth.register(form.value.firstname, form.value.lastname, form.value.email, form.value.password)
        .subscribe((token) => {
            this.alert.presentToast('Enregistré·e');
            this.dismissRegister();
        }), (error: { status: string; statusText: string; }) => {
          this.alert.presentToast('Une erreur est survenue lors de l\'inscription');
        };
  }
}
