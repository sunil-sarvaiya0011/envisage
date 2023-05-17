import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { ListOfPinsComponent } from './components/list-of-pins/list-of-pins.component';
import { AddPinComponent } from './components/add-pin/add-pin.component';

const routes: Routes = [
  {
    path:'create-customer',
    component:CreateCustomerComponent
  },
  {
    path:'',
    component:ListOfPinsComponent
  },
  {
    path:'addPin',
    component:AddPinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
