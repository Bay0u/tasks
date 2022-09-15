import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import { PostService } from './post.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  name = 'Angular 5';
  posts: any[] = [];
  title = 'my-new-app';
  list: any[] = [];

  constructor(private service: PostService, private router: Router) { }
  movieclicked(id: any) {
    //console.log(id);

    this.router.navigate(['/movie/' + id]).then(() => {
      window.location.reload();
    });
    //this.getmovie.getMovieContent(id);
  }
  totalLength: any;
  page: number = 1;
  token: String = "";
  ngOnInit() {
    //console.log(this.page);
    var page = this.router.url.split("/", 3)[2]
    this.pageclicked(page);
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    if(page == "1"){
      if(left != null){
        left.style.visibility = 'hidden';
      }
    }
    if(page == "22"){
      if(right != null){
        right.style.visibility = 'hidden';
      }
    }
    else{
      if(page != "1"){
        if(left!=null && left.style.visibility == 'hidden'){
          left.style.visibility = 'visible';
        }
      }
      if(page != "22"){
        if(right!=null && right.style.visibility == 'hidden'){
          right.style.visibility = 'visible';
        }
      }
    }
  }
  rightclick(){
    var page = this.router.url.split("/", 3)[2];
    //console.log("d5lt")
    if((parseInt(page)+1) <=22){
      var newpage = parseInt(page) +1 ;
      //console.log(newpage)

      var newurl = '/home/'+ newpage;
      this.router.navigate([newurl]).then(() => {
               window.location.reload();
            });
    }
  }
  leftclick(){
    var page = this.router.url.split("/", 3)[2];
    if((parseInt(page)-1) >=1){
      var newpage = parseInt(page) -1 ;
      var newurl = '/home/'+ newpage;
      this.router.navigate([newurl]).then(() => {
               window.location.reload();
            });
    }
  }
  pageclicked(page : any) {
    // for (let index = 1; index < 10; index++) {
    //   this.service.getallMovies(index).subscribe((data: any) => {
    //     console.log(data);
    //     this.list = this.list.concat(data.results);
    //   });
    // }

    this.token = localStorage.getItem('token')+"";
    //console.log("our token " + this.token);
    this.service.getallMoviesback(page,this.token).subscribe((data: any) => {
      //console.log("backend");
      //console.log(data);
      this.list = data.content;
    });
    
  }
  
}
