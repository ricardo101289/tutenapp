import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api'
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email = "";
  password = "";
  loader : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private api:ApiProvider,
    public loadingController: LoadingController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    if (localStorage.getItem('token_user') !== null && localStorage.getItem('token_user') !== undefined) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  showAlert(text) {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  login(){
    if (this.email && this.password) {
      this.presentLoading();
      this.api.login(this.email, this.password).then(res =>{
        let response : any = res;
        localStorage.setItem('token_user', response.sessionTokenBck);
        localStorage.setItem('email', this.email);
        this.loader.dismiss();
        this.navCtrl.setRoot(HomePage);
      }).catch(err =>{
        this.showAlert("Usuario o contraseña incorrectos");
        this.loader.dismiss();
      })
      } else {
        this.showAlert('Completa todos los campos.');
      }
  }

}
