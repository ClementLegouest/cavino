import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from '../../services/env.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { CellarsService } from 'src/app/services/cellars.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
      private modal: ModalController,
      private menu: MenuController,
      private authService: AuthService,
      private router: Router,
      private env: EnvService,
      private storage: NativeStorage,
  ) {
    this.menu.enable(false);
  }

  ionViewWillEnter() {

  }

  ngOnInit() {

  }

  async register() {
    const registerModal = await this.modal.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  async login() {
    const loginModal = await this.modal.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }
}
