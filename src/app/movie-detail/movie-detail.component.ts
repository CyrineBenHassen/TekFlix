import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FilmService } from '../services/film.service';

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
  safeTrailerUrl!: SafeResourceUrl;
  showModal= false;


  


  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private filmService : FilmService) {}
      ngOnInit(){
        console.log("Inside ngOnInit");
        this.filmId = this.route.snapshot.paramMap.get('id');
        console.log("Id Film:", this.filmId);
        this.film = this.films.find(f => f.id === parseInt(this.filmId));
        console.log("Film:", this.film);

      }

      openModal(){
        if(this.film && this.film.trailerUrl){
          const embedUrl = this.film.trailerUrl.replace("watch?v=", "embed/");
          this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
          this.showModal = true;
        }
      }

      closeModel(){
        this.showModal = false;
      }

  


}
