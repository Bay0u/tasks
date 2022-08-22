import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  movie_id = 278;
  api_key = 'b6e2109048f82d1b47ad85176dfd9044';
  private top_rated_url: any;
  private movie_url: any;
  posts: Object | undefined;
  movieslist: any;
  savemoviesarray: any;
  constructor(private httpClient: HttpClient) { }
  savedata(input = []) {
    this.savemoviesarray = this.savemoviesarray.concat(input);
    //console.log(this.savemoviesarray);
  }
  timeLeft: number = 6000;
  interval: any;


  getallMovies(page: any) {
    return (this.httpClient.get(this.generateAllMovies(page)));
  }
  getoneMovie(id: any) {
    this.movie_id = id
    return this.httpClient.get(this.generateoneMovie(id))
  }
  generateAllMovies(page: any) {
    this.top_rated_url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.api_key + '&language=en-US&page=' + page;
    return this.top_rated_url
  }
  generateoneMovie(id: any) {
    this.movie_id = id
    this.movie_url = 'https://api.themoviedb.org/3/movie/' + this.movie_id + '?api_key=' + this.api_key + '&language=en-US';
    return this.movie_url
  }

}