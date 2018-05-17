import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponent implements OnInit {
  movieDetails: any;
  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movieDetails = this.movieService.getMovie(this.route.snapshot.params['id'])
      
        console.log(this.movieDetails)
  }
  
}
