import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { FourComponentComponent } from './four-component/four-component.component';
import { BodyComponent } from './body/body.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FiveComponentComponent } from './five-component/five-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { SixComponentComponent } from './six-component/six-component.component';
import { SevenComponentComponent } from './seven-component/seven-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FourComponentComponent,
    BodyComponent,
    FirstComponentComponent,
    FiveComponentComponent,
    ThirdComponentComponent,
    SixComponentComponent,
    BodyComponent,
    FirstComponentComponent,
    SevenComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
