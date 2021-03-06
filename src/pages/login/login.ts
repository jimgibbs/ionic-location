import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';
import { PasswordPage } from '../password/password';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	loading: Loading;
	loginCredentials = {email: '', password: ''};

  	constructor(private navCtrl: NavController, 
  		private auth: AuthService, 
  		private alertCtrl: AlertController, 
  		private loadingCtrl: LoadingController) {
  		
  	}

	public forgotPassword(){
		this.navCtrl.push(PasswordPage);
	}

	public login(){
		this.showLoading();
		this.auth.login(this.loginCredentials).subscribe(allowed => {
			if(allowed){
				setTimeout(() => {
					this.loading.dismiss();
					this.navCtrl.setRoot(HomePage);
				});
			}else{
				this.showError('Access Denied');
			}
		}, error => {
			this.showError(error);
		});
	}

	showLoading(){
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.loading.present();
	}

	showError(text){
		setTimeout(() => {
			this.loading.dismiss();
		});

		let alert = this.alertCtrl.create({
			title: 'Fail',
			subTitle: text,
			buttons: ['OK']
		});

		alert.present(prompt);
	}

}
