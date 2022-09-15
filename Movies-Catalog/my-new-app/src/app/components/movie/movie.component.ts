import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../home/post.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: any;
  token: String = "";

  constructor(private service: PostService, private router: Router) { }

  getMovieContent(id: any) {
    this.token = localStorage.getItem('token')+"";
    this.service.getoneMovieback(id,this.token).subscribe((data: any) => {
      console.log("movie data")
      console.log(data);
      this.movie = data;
    });
  }
  onToggleFavorite() { }
  ngOnInit(): void {
    var id = this.router.url.split("/", 3)[2]
    this.getMovieContent(id)
  }

}
