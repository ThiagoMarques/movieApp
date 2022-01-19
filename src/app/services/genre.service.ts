import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IGenreList } from '../models/iGenrer';

@Injectable({
  providedIn: 'root'
})

export class GenreService {

  language = 'pt-BR';

  private apiURL = 'http://api.themoviedb.org/3/';
  private key = '?api_key=898915155b5e55642efcc67317e973a0';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  getGenders(): Observable<IGenreList>{
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.language}`;

    return this.http.get<IGenreList>(url);
  }

  async showError(error) {
    const toast = await this.toastController.create({
      message: 'Error connect API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
