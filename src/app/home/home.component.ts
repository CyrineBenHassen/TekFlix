import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){}
  goToMoviesList(){
    this.router.navigate(['/movies-list']);
  }

  films:Film[] = FILMS ;
  
}
