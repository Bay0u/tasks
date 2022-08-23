import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import { PostService } from './post.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name = 'Angular 5';
  posts: any[] = [];
  title = 'my-new-app';
  list: any[] = [];

  constructor(private service: PostService, private router: Router) { }
  movieclicked(id: any) {
    //console.log(id);

    this.router.navigate(['/home/' + id]).then(() => {
      window.location.reload();
    });
    //this.getmovie.getMovieContent(id);
  }
  totalLength: any;
  page: number = 1;

  ngOnInit() {
    console.log(this.page);
    this.pageclicked();
  }
  pageclicked() {
    var index: any[] = [];
    for (let index = 1; index < 501; index++) {
      this.service.getallMovies(index).subscribe((data: any) => {
        this.list = this.list.concat(data.results);
      });
    }
    //this.savedata(this.movieslist);
    //console.log("first");
    //console.log(this.movieslist);

    //this.totalLength = this.list.length;
    // this.service.getallMovies().subscribe( (data:any)=>{
    //   console.log(data)
    //   this.list = data.results;
    // }); 
  }

}
