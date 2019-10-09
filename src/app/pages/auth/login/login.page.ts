import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    disabledButton = false;

    constructor(
        private modal: ModalController,
        private auth: AuthService,
        private router: Router,
        private alert: AlertService,
        private env: EnvService,
        private storage: NativeStorage
    ) { }

    ngOnInit() {
    }

    // Dismiss Login Modal
    dismissLogin() {
        this.modal.dismiss();
    }

    // On Register button tap, dismiss login modal and open register modal
    async registerModal() {
        this.dismissLogin();
        const registerModal = await this.modal.create({
            component: RegisterPage
        });
        return await registerModal.present();
    }

    async register() {
        const registerModal = await this.modal.create({
          component: RegisterPage
        });
        return await registerModal.present();
      }

    login(form: NgForm) {
        if (form.value.email === '' || form.value.password === '') {
            this.alert.presentToast('identifiants non renseignés');
        } else {
            this.disabledButton = true;
            this.auth.login(form.value.email, form.value.password)
                .subscribe((token) => {
                    this.auth.token = token;
                    this.auth.isLoggedIn = true;
                    this.alert.presentToast('Connecté·e');
                    this.dismissLogin();
                    this.router.navigateByUrl('/dashboard');
                }), (error: { status: string; statusText: string; }) => {
                    this.alert.presentToast("Identifiants inexistants ou erronés");
                };
            this.disabledButton = false;
        }
    }
}
