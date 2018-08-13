import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { EmployeeAttendenceComponent } from './employee-attendence/employee-attendence.component';

@NgModule({
  imports: [
    
  ],
  declarations: [EmployeeAttendenceComponent]
})
export class EmployeeModule { }
