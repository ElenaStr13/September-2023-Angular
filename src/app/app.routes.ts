import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {userDetailsResolver} from "./services/resolves/user-details.resolver";
import {UserDetailsPageComponent} from "./pages/user-details-page/user-details-page.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";

let PostsPageComponent;
export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {
        path: 'users', component: UsersPageComponent, children: [
          {path: ':id',resolve:{userData:userDetailsResolver}, component: UserDetailsPageComponent}
        ]
      },
      {
        path:"posts", component:PostPageComponent
      }
    ]
  }
];
