import { Routes } from '@angular/router';
import { Images } from '../images/images';
import { NoImages } from '../no-images/no-images';

export const routes: Routes = [
  { path: 'images', component: Images },
  { path: 'no-images', component: NoImages },
];
