import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faHome, faGripVertical} from '@fortawesome/free-solid-svg-icons';
import { EventsComponent } from './events/events.component';

library.add(faFacebook, faHome, faGripVertical);
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavBarComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
