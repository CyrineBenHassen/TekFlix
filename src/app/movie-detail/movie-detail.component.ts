import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  filmId?: any;
  films : Film[] = FILMS;
  film? : Film;

  constructor(private route: ActivatedRoute) {}
      ngOnInit(){
        console.log("Inside on init");
        this.filmId = this.route.snapshot.paramMap.get('id')

        console.log("Id Film:", this.filmId);
        this.film = this.films.find(f => f.id === parseInt(this.filmId));
        console.log("Film:", this.film);

      }

  


}
