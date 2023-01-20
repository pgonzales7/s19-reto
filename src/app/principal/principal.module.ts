import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { VistaComponent } from './vista/vista.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserintersectorService } from '../services/userintersector.service';


@NgModule({
  declarations: [
    TablaComponent,
    VistaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    TablaComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserintersectorService,
      multi: true
    }
  ]
})
export class PrincipalModule { }
