import { NgModule } from '@angular/core';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
   MDBBootstrapModule.forRoot()
  ],
  exports:[DeletePopupComponent],
  declarations: [DeletePopupComponent]
})
export class SharedModule { }
