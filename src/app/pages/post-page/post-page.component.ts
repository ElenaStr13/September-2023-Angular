import { Component } from '@angular/core';
import {PostsComponent} from "../../components/post-container/posts/posts.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [
    PostsComponent,
    RouterOutlet
  ],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {

}
