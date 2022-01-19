import { IMovie } from './../models/IMovie.models';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-movie',
  templateUrl: './data-movie.page.html',
  styleUrls: ['./data-movie.page.scss'],
})
export class DataMoviePage implements OnInit {

  movie: IMovie;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.movie = this.dataService.getData('movie');
    console.log('Movie send', this.movie);
  }

}
