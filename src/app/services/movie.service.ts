import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { IMovieList } from './../models/IMovieAPI.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  language = 'pt-BR';
  region = 'BR';

  private apiURL = 'http://api.themoviedb.org/3/';
  private key = '?api_key=898915155b5e55642efcc67317e973a0';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  searchMovie(search: string): Observable<IMovieList>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.language}&region=${this.region}&query=${search}`;

    return this.http.get<IMovieList>(url);
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
