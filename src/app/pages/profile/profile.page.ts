import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {EnvService} from '../../services/env.service';
import {AuthService} from '../../services/auth.service';
import {MenuService} from '../../services/menu.service';
import { RegionService } from 'src/app/services/region.service';
import { FavouriteRegion } from 'src/app/models/favourite-region';
import { WineService } from 'src/app/services/wine.service';
import { FavouriteWine } from 'src/app/models/favourite-wine';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private user: User;
  private menuList;
  public favRegionsList: Array<FavouriteRegion>;
  public favWinesList: Array<FavouriteWine>;

  constructor(
      private authService: AuthService,
      private env: EnvService,
      private menuService: MenuService,
      private storage: NativeStorage,
      private region: RegionService,
      private wine: WineService,
  ) {
    region.getFavouriteRegions()
    .subscribe((favRegions) => {
      region.favRegionsList = favRegions;
      this.favRegionsList = favRegions;
    });
    wine.getFavouriteWines()
    .subscribe((favWines) => {
      this.favWinesList = favWines;
      wine.favWinesList = favWines;
    });
    this.menuList = menuService.appPages;
  }

  async ngOnInit() {
    this.user = this.authService.user;
  }

  disconnect() {
    this.authService.logout();
  }
}
