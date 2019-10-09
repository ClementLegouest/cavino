import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _appPages = [
    {
      title: 'Accueil',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Celliers',
      url: '/cellars',
      icon: 'grid'
    },
    {
      title: 'Profil',
      url: '/profile',
      icon: 'person'
    },
  ];

  constructor() {}


  get appPages(): ({ icon: string; title: string; url: string } |
      { icon: string; title: string; url: string } |
      { icon: string; title: string; url: string })[] {
    return this._appPages;
  }
}
