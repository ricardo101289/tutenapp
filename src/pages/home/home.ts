import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profile: any;
  loader: any;
  public searchTerm : string;
  constructor(
    private api:ApiProvider,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    this.getProfile();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  getProfile(){
    this.presentLoading();
    this.api.profile().then(res=>{
      this.profile = res;
      this.loader.dismiss();
    }).catch(err=>{
      this.loader.dismiss();
    })
  }

  closeSession(){
    localStorage.clear();
    this.navCtrl.setRoot('LoginPage');
  }
}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);

      if (defaultFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }
}