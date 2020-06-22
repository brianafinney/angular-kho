import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService,
  MsalAngularConfiguration
} from '@azure/msal-angular';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../shared/services/data.service';
import { AppSidebarService } from '../shared/services/sidebar.service';
import { OtherComponent } from './components/other.component';
import { MoreOtherComponent } from './components/more-other.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    MsalModule.forRoot(MSALConfigFactory()),
     ],
  exports: [
    MsalModule,
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    OtherComponent,
    MoreOtherComponent    
    ],
  providers: [
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService,
    AuthenticationService,
    DataService, 
    AppSidebarService 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
