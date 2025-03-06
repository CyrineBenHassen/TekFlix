import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})

export class MovieListComponent {
  categories: string[] = ['ALL','Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy'];
  selectedCategory: string = 'ALL';
  films : Film[] = FILMS;
  filtreFilms?: Film[];



get filtredFilms() :Film[]{
  return this.selectedCategory === 'ALL' ?
   this.films 
   : this.films.filter(f => f.genre === this.selectedCategory);
}

selectCategory(category: string)  {
  this.selectedCategory = category;
  console.log("selected category : ", this.selectedCategory);
}
}
