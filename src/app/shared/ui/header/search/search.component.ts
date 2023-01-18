import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MoviesService} from "../../../services/movies.service";
import {Movie} from "../../../value-objects/movie";
import {debounceTime} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchMovieForm: FormGroup;

  constructor(private movieService: MoviesService,
              private router: Router) {
    this.searchMovieForm = new FormGroup({
      searchQuery: new FormControl()
    });
  }

  ngOnInit() {
    this.searchMovieForm.get('searchQuery')?.valueChanges.pipe(debounceTime(200)).subscribe((searchValue: string) => {
      if (!!searchValue) {
        this.movieService.getMovies(searchValue).subscribe((movies: Array<Movie>) => {
          this.movieService.setMovies(movies);
        });
      }
    });
  }

  public searchMovie(): void {
    this.router.navigateByUrl('').then(
      () => {
        return this.movieService.getMovies(this.searchMovieForm.get('searchQuery')?.value).subscribe((movies: Array<Movie>) => {
          this.searchMovieForm.reset();
          this.movieService.setMovies(movies);
        });
      }
    );
  }

}
