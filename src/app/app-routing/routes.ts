import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutTeamComponent } from '../about-team/about-team.component';
import { AboutDirectorComponent } from '../about-director/about-director.component';
import { ContactComponent } from '../contact/contact.component';
import { ServiceMarketComponent } from '../service-market/service-market.component';
import { ServiceMediaComponent } from '../service-media/service-media.component';

export const routes: Routes =[
{ path: 'home', component: HomeComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'director', component: AboutDirectorComponent },
{ path: 'team', component: AboutTeamComponent},
{ path: 'market_research', component: ServiceMarketComponent },
{ path: 'media_initiatives', component: ServiceMediaComponent},
{ path: '', redirectTo:'/home', pathMatch: 'full'}
]