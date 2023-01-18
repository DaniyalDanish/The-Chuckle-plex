import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../shared/services/movies.service";
import {Movie} from "../shared/value-objects/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: any;

  constructor(private readonly moviesService: MoviesService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  public getMovies(): void {
    this.moviesService.subjectValue.subscribe(
      (movies: Array<Movie>) => {
        if (typeof Worker !== 'undefined') {
          const worker = new Worker(new URL('./home.worker', import.meta.url));
          worker.onmessage = ({data}) => {
            this.movies = data.movies;
          };
          worker.postMessage({movies});
        }
      }
    )
  }

}
