import {Routes} from '@angular/router';
import {Route} from "../interfaces/route";
import {TabsPage} from "./tabs.page";

const pages = [
  import(`../tabs-contents/tab1/tab1.page`),
  import(`../tabs-contents/tab2/tab2.page`),
  import(`../tabs-contents/tab3/tab3.page`),
]

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      ...pages
        .map(
          (m, id) => new Route(1 + id, m)
          .route()),
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
