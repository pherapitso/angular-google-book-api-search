import { RouterModule , Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search',  component: SearchComponent },
    { path: 'search/:isbn', component: ResultComponent },
    { path: '**', component: NotFoundComponent }
]

export const AppRouting = RouterModule.forRoot(appRoutes);