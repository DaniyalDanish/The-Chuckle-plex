import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../shared/services/movies.service";
import {MovieDetails} from "../shared/value-objects/movieDetails";

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css']
})
export class MovieOverviewComponent implements OnInit {

  public movieDetails: MovieDetails | null = null;
  constructor(private readonly route: ActivatedRoute,
              private movieService: MoviesService) {
  }

  public ngOnInit(): void {
    this.getMovie(this.route.snapshot.params['id']);
  }

  public getMovie(id: string): void {
      this.movieService.getMovieById(id).subscribe((movie: MovieDetails) => {
        this.movieDetails = movie;
      })
  }
}
