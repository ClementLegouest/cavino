import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from '../../services/env.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
      private modalController: ModalController,
      private menu: MenuController,
      private authService: AuthService,
      private router: Router,
      private env: EnvService
  ) {
    this.menu.enable(false);
  }

  ionViewWillEnter() {
    if (!(this.env.token.token === '')) {
      this.router.navigateByUrl('dashboard');
    }
  }

  ngOnInit() {

  }

  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }
}
