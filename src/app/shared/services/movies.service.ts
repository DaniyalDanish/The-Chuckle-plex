import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, Subject, throwError} from "rxjs";
import {Movie} from "../value-objects/movie";
import {MovieDetails} from "../value-objects/movieDetails";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private movieSubject = new Subject<Array<Movie>>();
  public subjectValue = this.movieSubject.asObservable();

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://www.omdbapi.com/'
    this.apiKey = '8ea39b15'
  }

  public getMovies(searchTerm: string): Observable<Array<Movie>> {
    return this.http.get(this.baseUrl + '?s=' + searchTerm + '&apiKey=' + this.apiKey).pipe(
      map((data: any) => data?.Search),
      catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }
      ));
  }

  public getMovieById(id: string): Observable<MovieDetails> {
    return this.http.get(this.baseUrl + '?i=' + id + '&apiKey=' + this.apiKey).pipe(
      map((data: any) => data),
      catchError((error: any) => {
          console.log(error);
          return throwError(error);
        }
      ));
  }

  public setMovies(movies: Array<Movie>): void {
    this.movieSubject.pipe(map((value: any) => value as Movie));
    this.movieSubject.next(movies);
  }

}
