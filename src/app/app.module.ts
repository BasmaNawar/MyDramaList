import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './views/home/home.component';
import { ContentareaComponent } from './components/contentarea/contentarea.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopsliderComponent } from './components/topslider/topslider.component';
import { VotinglistsComponent } from './components/votinglists/votinglists.component';
import { AiringshowsComponent } from './components/airingshows/airingshows.component';
import { UpcomingshowsComponent } from './components/upcomingshows/upcomingshows.component';
import { RecentdiscussComponent } from './components/recentdiscuss/recentdiscuss.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { TrailerComponent } from './views/trailer/trailer.component';
import { DetailsComponent } from './views/details/details.component';
import { LeftsidedataComponent } from './components/leftsidedata/leftsidedata.component';
import { EpisodeguideComponent } from './views/episodeguide/episodeguide.component';
import { CastComponent } from './views/cast/cast.component';
import { ReviewsComponent } from './views/reviews/reviews.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ContentareaComponent,
    SliderComponent,
    SidebarComponent,
    TopsliderComponent,
    VotinglistsComponent,
    AiringshowsComponent,
    UpcomingshowsComponent,
    RecentdiscussComponent,
    LeftsidebarComponent,
    TrailerComponent,
    DetailsComponent,
    LeftsidedataComponent,
    EpisodeguideComponent,
    CastComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'trailer',
        component: TrailerComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'episodes',
        component: EpisodeguideComponent
      },
      {
        path: 'cast',
        component: CastComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      }

    ])
  ],

  exports: [BsDropdownModule, TooltipModule, ModalModule],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

export class AppBootstrapModule { }
