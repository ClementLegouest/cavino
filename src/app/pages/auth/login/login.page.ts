import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import {EnvService} from '../../../services/env.service';
import {Router} from '@angular/router';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        private modalController: ModalController,
        private authService: AuthService,
        private router: Router,
        private alertService: AlertService,
        private envService: EnvService,
        private storage: NativeStorage,
        private env: EnvService
    ) { }

    ngOnInit() {
    }

    // Dismiss Login Modal
    dismissLogin() {
        this.modalController.dismiss();
    }

    // On Register button tap, dismiss login modal and open register modal
    async registerModal() {
        this.dismissLogin();
        const registerModal = await this.modalController.create({
            component: RegisterPage
        });
        return await registerModal.present();
    }

    login(form: NgForm) {
        if (form.value.email === '' || form.value.password === '') {
            this.alertService.presentToast('identifiants non renseignés');
        } else {
            this.authService.login(form.value.email, form.value.password)
                .subscribe((token) => {
                    if ( this.env.isMobile() ) {
                        this.storage.setItem('token', JSON.stringify(token));
                    } else {
                        localStorage.setItem('token', JSON.stringify(token));
                    }
                    this.authService.isLoggedIn = true;
                    this.alertService.presentToast('Connecté·e');
                    this.dismissLogin();
                    this.router.navigateByUrl('/dashboard');
                });
        }
    }
}
