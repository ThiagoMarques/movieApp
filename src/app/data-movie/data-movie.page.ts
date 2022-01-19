import { IMovieAPI } from './../models/IMovieAPI.models';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-movie',
  templateUrl: './data-movie.page.html',
  styleUrls: ['./data-movie.page.scss'],
})
export class DataMoviePage implements OnInit {

  movie: IMovieAPI;

  genres: string[] = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.movie = this.dataService.getData('movie');
    this.genres = this.dataService.getData('genres');
    console.log('Movie send', this.movie);
  }

}
