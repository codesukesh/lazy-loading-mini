import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazy-loading';
  goToPage="next";
  constructor(private router: Router,
    private activeRoute: ActivatedRoute){}

  ngOnInit(){
   
  }

 
}
