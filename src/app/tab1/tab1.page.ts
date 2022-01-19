import { IMovieAPI, IMovieList } from './../models/IMovieAPI.models';
import { MovieService } from './../services/movie.service';
import { DataService } from './../services/data.service';
import { IMovie } from '../models/IMovie.models';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title: string = 'MovieApp';

  listMovie: IMovie[] = [
    {
      name: 'The Flash (2014)',
      genre: ['Drama', 'Sci-Fi', 'Fantasy'],
      duration: '44m',
      classification: 78,
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg',
      page: '/flash'
    },
    {
      name: 'Game of Thrones (2011)',
      genre: ['Drama', 'Sci-Fi', 'Fantasy', 'Animation'],
      duration: '1h',
      classification: 85,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3pLLMbM33SBGrade4TuahCP1sdJ.jpg',
      page: '/game-of-thrones'
    }
  ];

  movieList: IMovieList;

  constructor(public alertController: AlertController, public toastController: ToastController,
    public dataService: DataService, public route: Router, public movieService: MovieService) {}

    searchMovies(event: any){
      console.log(event.target.value);
      const search = event.target.value;
      if(search && search.trim() !== ''){
        this.movieService.searchMovie(search).subscribe(data => {
          console.log(data);
          this.movieList = data;
        });
      }
    }


    showMovie(movie: IMovieAPI){
      this.dataService.storeData('movie', movie);
      this.route.navigateByUrl('/data-movie')
    }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Do you want favorite film?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.presentToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Movie favorite add!.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
